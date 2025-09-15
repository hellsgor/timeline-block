import styled from 'styled-components';
import type { IButtonRounded } from './types';

export const StyledButtonRounded = styled.button<IButtonRounded>`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: ${(props) => {
    switch (props.size) {
      case 'big':
        return '56px';
      case 'small':
        return '40px';
      default:
        return '50px';
    }
  }};
  border: ${(props) =>
    props.isBordered
      ? `1px solid ${props.theme.colors.elements.static}`
      : 'none'};
  border-radius: 50%;

  color: ${(props) => props.color || props.theme.colors.content.base};

  background-color: ${(props) =>
    props.isTransparent ? 'transparent' : props.theme.colors.bg};
  ${(props) => props.isShadowed && `filter: ${props.theme.colors.shadow};`}
`;
