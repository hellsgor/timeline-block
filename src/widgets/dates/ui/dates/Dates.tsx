import * as S from './Dates.styled';

import { BackgroundLines, Container, Heading, Navigation } from '@/shared/ui';
import { CategorySlider } from '../category-slider';
import { useCategories } from '../../lib';

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
            onPrev={() => decrementActiveCategorySlide()}
            onNext={() => incrementActiveCategorySlide()}
          />
          <CategorySlider data={currentCategory[1]} />
        </S.StyledWrapper>
      </Container>
    </section>
  );
}
