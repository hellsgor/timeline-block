import gsap from 'gsap';
import type { Swiper as SwiperType } from 'swiper';

import { Navigation } from '@/shared/ui';
import { CategorySlider } from '../category-slider';
import { useCategories } from '../../lib';
import { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { Pagination } from '../pagination';

export function Dates() {
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

  const runCategoryChangeAnimation = useCallback(
    (changeFn: () => void) => {
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
    },
    [isAnimating],
  );

  return (
    <>
      <Pagination categories={categories} currentIdx={currentIdx} />
      <Navigation
        active={currentIdx}
        total={categories.length}
        onPrev={() => runCategoryChangeAnimation(decrementActiveCategorySlide)}
        onNext={() => runCategoryChangeAnimation(incrementActiveCategorySlide)}
      />
      <CategorySlider
        ref={categorySliderRef}
        data={currentCategory[1]}
        dataId={currentCategory[0]}
      />
    </>
  );
}
