import 'swiper/swiper-bundle.css';
import type { Swiper as SwiperType } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import type { ITimelineCategory } from '../../model';
import * as S from './CategorySlider.styled';
import { EventCard } from '@/shared/ui';
import { SliderNavNext } from '../slider-nav-next';
import { useEffect, forwardRef, useRef, useCallback } from 'react';

type CategorySlideProps = {
  data: ITimelineCategory;
  dataId: string;
};

export const CategorySlider = forwardRef<SwiperType, CategorySlideProps>(
  ({ data, dataId }, ref) => {
    const swiperRef = useRef<SwiperType | null>(null);

    const handleSwiper = useCallback(
      (swiper: SwiperType) => {
        swiperRef.current = swiper;
        if (ref) {
          if (typeof ref === 'function') {
            ref(swiper);
          } else if (ref && 'current' in ref) {
            ref.current = swiper;
          }
        }
      },
      [ref],
    );

    const handleNext = useCallback(() => {
      swiperRef.current?.slideNext();
    }, []);

    useEffect(() => {
      swiperRef.current?.slideTo(0, 0);
    }, [dataId]);

    return (
      <S.StyledSwiperContainer>
        <S.StyledSwiper
          onSwiper={handleSwiper}
          slidesPerView={3}
          spaceBetween={80}
          rewind
          grabCursor
        >
          {data.items.map((item) => (
            <SwiperSlide key={item.id}>
              <EventCard
                title={`${item.year}`}
                text={item.text}
                data-id={item.id}
              />
            </SwiperSlide>
          ))}
        </S.StyledSwiper>
        <SliderNavNext onNext={handleNext} />
      </S.StyledSwiperContainer>
    );
  },
);

CategorySlider.displayName = 'CategorySlider';
