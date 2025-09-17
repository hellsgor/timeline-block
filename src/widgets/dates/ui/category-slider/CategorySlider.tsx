import 'swiper/swiper-bundle.css';
import type { Swiper as SwiperType } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import type { ITimelineCategory } from '../../model';
import * as S from './CategorySlider.styled';
import { EventCard, Icon } from '@/shared/ui';
import { useEffect, useRef, forwardRef } from 'react';

type CategorySlideProps = {
  data: ITimelineCategory;
  dataId: string;
};

export const CategorySlider = forwardRef<SwiperType, CategorySlideProps>(
  ({ data, dataId }, ref) => {
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
      swiperRef.current?.slideTo(0, 0);
    }, [dataId]);

    return (
      <S.StyledSwiperContainer>
        <S.StyledSwiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (ref) {
              if (typeof ref === 'function') {
                ref(swiper);
              } else {
                ref.current = swiper;
              }
            }
          }}
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
        <S.StyledButtonRounded
          isShadowed
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <Icon name={'Chevron'} />
        </S.StyledButtonRounded>
      </S.StyledSwiperContainer>
    );
  },
);

CategorySlider.displayName = 'CategorySlider';
