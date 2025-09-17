import { BackgroundLines, Container, Heading } from '@/shared/ui';
import * as S from './DatesView.styled';
import { Dates } from '../dates/Dates';

export function DatesView() {
  return (
    <section>
      <Container>
        <S.StyledWrapper>
          <BackgroundLines />
          <Heading type={2}>
            Исторические
            <br />
            даты
          </Heading>
          <Dates />
        </S.StyledWrapper>
      </Container>
    </section>
  );
}
