import { ButtonRounded } from '@/shared/ui';
import { memo } from 'react';

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
    <ButtonRounded
      isBordered
      children={idx + 1}
      hint={isActive ? title : undefined}
    />
  );
});
