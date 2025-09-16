import 'swiper/swiper-bundle.css';
import type { Swiper as SwiperType } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import type { ITimelineCategory } from '../../model';
import * as S from './CategorySlider.styled';
import { EventCard, Icon } from '@/shared/ui';
import { useRef } from 'react';

type CategorySlideProps = {
  data: ITimelineCategory;
};

export function CategorySlider({ data }: CategorySlideProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <S.StyledSwiperContainer>
      <S.StyledSwiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
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
        <S.StyledButtonRounded
          isShadowed
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <Icon name={'Chevron'} />
        </S.StyledButtonRounded>
      </S.StyledSwiper>
    </S.StyledSwiperContainer>
  );
}
