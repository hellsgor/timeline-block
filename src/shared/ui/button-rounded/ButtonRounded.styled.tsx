import styled from 'styled-components';
import type { IButtonRounded } from './types';

export const StyledButtonRounded = styled.button<IButtonRounded>`
  --tr-func: ${({ theme }) => theme.transitions.func};
  --tr-duration: ${({ theme }) => theme.transitions.duration};

  will-change: color, border-color, opacity;

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

  transition: color var(--tr-duration) var(--tr-func), border-color var(--tr-duration) var(--tr-func), opacity var(--tr-duration) var(--tr-func);

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.elements.hover};
      color: ${({ theme }) => theme.colors.content.accent.fuschia};
    }
  }

  &:active {
    border-color: ${({ theme }) => theme.colors.elements.active};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.elements.static};
    color: ${(props) => props.color || props.theme.colors.content.base};
    opacity: 0.5;
  }
`;
