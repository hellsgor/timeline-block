import { memo } from 'react';
import { Line } from '@/shared/ui';
import type { ITimelineCategory } from '../../model';
import { PaginationButton } from '../pagination-button';
import * as S from './Pagination.styled';

interface PaginationProps {
  categories: [string, ITimelineCategory][];
  currentIdx: number;
}

export const Pagination = memo(function Pagination({
  categories,
  currentIdx,
}: PaginationProps) {
  const buttons = categories.map((category, idx) => (
    <PaginationButton
      key={idx}
      idx={idx}
      isActive={currentIdx === idx}
      title={category[1].title}
    />
  ));
  return (
    <S.StyledWrapper>
      <S.StyledRound />
      <Line direction="horizontal" opacity={0.1} />
      {buttons}
    </S.StyledWrapper>
  );
});
