import { BackgroundLines, Container, Heading, Section } from '@/shared/ui';
import * as S from './DatesView.styled';
import { Dates } from '../dates/Dates';

export function DatesView() {
  return (
    <Section>
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
    </Section>
  );
}
