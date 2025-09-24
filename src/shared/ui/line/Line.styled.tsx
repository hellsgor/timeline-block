import styled from 'styled-components';
import type { StyledLineProps } from './types';

export const StyledLine = styled.span<StyledLineProps>`
  display: block;

  width: ${({ $direction, $thickness }) =>
    $direction === 'horizontal' ? '100%' : `${$thickness || 1}px`};
  height: ${({ $direction, $thickness }) =>
    $direction === 'horizontal' ? `${$thickness || 1}px` : '100%'};

  opacity: ${(props) => props.$opacity || 0.1};
  background-color: ${(props) =>
    props.$color || props.theme.colors.content.base};
`;
