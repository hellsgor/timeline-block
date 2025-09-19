import { ButtonRounded } from '@/shared/ui';
import { memo } from 'react';
import * as S from './PaginationButton.styled';

interface PaginationButtonProps {
  idx: number;
  isActive: boolean;
  title: string;
}

export const PaginationButton = memo(function PaginationButton({
  idx,
  isActive,
  title,
}: PaginationButtonProps) {
  return (
    <S.StyledPaginationButton>
      <ButtonRounded isBordered children={idx + 1} />
      {isActive ? <S.StyledText>{title}</S.StyledText> : null}
    </S.StyledPaginationButton>
  );
});
