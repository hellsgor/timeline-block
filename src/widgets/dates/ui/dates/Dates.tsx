import { BackgroundLines, Container } from '@/shared/ui';
import * as S from './Dates.styled';

type DatesProps = {
  sectionName?: string;
};

export function Dates({ sectionName = 'dates' }: DatesProps) {
  return (
    <section data-section-name={sectionName}>
      <Container>
        <S.StyledWrapper>
          <BackgroundLines />
          <p>some text</p>
        </S.StyledWrapper>
      </Container>
    </section>
  );
}
