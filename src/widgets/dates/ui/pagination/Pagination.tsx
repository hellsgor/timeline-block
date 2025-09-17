import { memo } from 'react';
import type { ITimelineCategory } from '../../model';
import { PaginationButton } from '../pagination-button';

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
  return <div>{buttons}</div>;
});
