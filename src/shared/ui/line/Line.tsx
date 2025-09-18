import type { LineProps } from './types';
import * as S from './Line.styled';

export function Line({ color, direction, thickness, opacity }: LineProps) {
  return (
    <S.StyledLine
      $color={color}
      $direction={direction}
      $thickness={thickness}
      $opacity={opacity}
    />
  );
}
