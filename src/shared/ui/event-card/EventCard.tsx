import * as S from './EventCard.styled';

type EventCardProps = {
  title: string;
  text: string;
};

export function EventCard({ title, text }: EventCardProps) {
  return (
    <S.StyledEventCard>
      <S.StyledTitle>{title}</S.StyledTitle>
      <S.StyledText>{text}</S.StyledText>
    </S.StyledEventCard>
  );
}
