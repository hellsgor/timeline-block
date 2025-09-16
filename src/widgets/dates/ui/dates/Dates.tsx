import { BackgroundLines, Container, Heading } from '@/shared/ui';
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
          <Heading type={2}>
            Исторические
            <br />
            даты
          </Heading>
        </S.StyledWrapper>
      </Container>
    </section>
  );
}
