import * as S from './Dates.styled';

import gsap from 'gsap';
import type { Swiper as SwiperType } from 'swiper';

import { BackgroundLines, Container, Heading, Navigation } from '@/shared/ui';
import { CategorySlider } from '../category-slider';
import { useCategories } from '../../lib';
import { useLayoutEffect, useRef, useState } from 'react';

type DatesProps = {
  sectionName?: string;
};

export function Dates({ sectionName = 'dates' }: DatesProps) {
  const {
    categories,
    currentCategory,
    currentIdx,
    decrementActiveCategorySlide,
    incrementActiveCategorySlide,
  } = useCategories();

  const categorySliderRef = useRef<SwiperType | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useLayoutEffect(() => {
    if (!categorySliderRef.current) return;

    gsap.set(categorySliderRef.current.el, {
      autoAlpha: 1,
      y: 0,
    });

    tlRef.current = gsap.timeline({ paused: true });
    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, [currentIdx]);

  const runCategoryChangeAnimation = (changeFn: () => void) => {
    if (isAnimating || !categorySliderRef.current) return;

    setIsAnimating(true);
    tlRef.current?.kill();
    tlRef.current = gsap.timeline();

    tlRef.current
      .to(categorySliderRef.current.el, {
        autoAlpha: 0,
        y: 100,
        duration: 0.5,
        ease: 'power2.inOut',
      })
      .add(() => {
        changeFn();
      })
      .add(() => {
        setIsAnimating(false);
      });
  };

  return (
    <section data-section-name={sectionName}>
      <Container>
        <S.StyledWrapper>
          <BackgroundLines />
          <Heading type={2}>
            Исторические
            <br />
            даты
          </Heading>
          <Navigation
            active={currentIdx}
            total={categories.length}
            onPrev={() =>
              runCategoryChangeAnimation(decrementActiveCategorySlide)
            }
            onNext={() =>
              runCategoryChangeAnimation(incrementActiveCategorySlide)
            }
          />
          <CategorySlider
            ref={categorySliderRef}
            data={currentCategory[1]}
            dataId={currentCategory[0]}
          />
        </S.StyledWrapper>
      </Container>
    </section>
  );
}
