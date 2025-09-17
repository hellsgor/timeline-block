import { Icon } from '@/shared/ui';
import * as S from './SliderNavNext.styled';

interface SliderNavNextProps {
  onNext: () => void;
}

export function SliderNavNext({ onNext }: SliderNavNextProps) {
  return (
    <S.StyledButtonRounded isShadowed onClick={onNext}>
      <Icon name={'Chevron'} />
    </S.StyledButtonRounded>
  );
}
