import { Icon } from '@/shared/ui';
import * as S from './SliderNavNext.styled';
import { memo } from 'react';

interface SliderNavNextProps {
  onNext: () => void;
}

export const SliderNavNext = memo(function SliderNavNext({
  onNext,
}: SliderNavNextProps) {
  return (
    <S.StyledButtonRounded isShadowed onClick={onNext}>
      <Icon name={'Chevron'} />
    </S.StyledButtonRounded>
  );
});
