import { BackgroundLines, Container, Heading } from '@/shared/ui';
import * as S from './Dates.styled';
import type { ITimelineData } from '../../model';
import { TIMELINE_DATA } from '../../config';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
import { CategorySlider } from '../category-slider';

type DatesProps = {
  sectionName?: string;
};

export function Dates({ sectionName = 'dates' }: DatesProps) {
  const data: ITimelineData = TIMELINE_DATA;

  const [activeCategorySlide] = useState(0);

  const activeCategory = Object.entries(data)[activeCategorySlide];

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
          <CategorySlider data={activeCategory[1]} />
        </S.StyledWrapper>
      </Container>
    </section>
  );
}
