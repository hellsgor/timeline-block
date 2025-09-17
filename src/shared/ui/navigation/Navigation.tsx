import { ButtonRounded, Icon } from '@/shared/ui';
import * as S from './Navigation.styled';
import { toTwoDigits } from '@/shared/lib';

type NavigationProps = {
  active: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export function Navigation({ active, total, onPrev, onNext }: NavigationProps) {
  return (
    <S.StyledNavigation>
      <S.StyledCounter>{`${toTwoDigits(active + 1)}/${toTwoDigits(total)}`}</S.StyledCounter>
      <S.StyledWrapper>
        <S.StyledPrevButton isBordered disabled={active === 0} onClick={onPrev}>
          <Icon name="Chevron" />
        </S.StyledPrevButton>
        <ButtonRounded
          isBordered
          disabled={active === total - 1}
          onClick={onNext}
        >
          <Icon name="Chevron" />
        </ButtonRounded>
      </S.StyledWrapper>
    </S.StyledNavigation>
  );
}
