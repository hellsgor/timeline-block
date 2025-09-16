import styled, { css } from 'styled-components';

const baseLine = css`
  display: block;

  width: 1px;
  height: 100%;

  opacity: 0.1;
  background-color: ${({ theme }) => theme.colors.content.base};
`;

export const StyledLine = styled.span`
  ${baseLine}
`;

export const StyledBackgroundLines = styled.div`
  pointer-events: none;

  position: absolute;
  z-index: -1;
  inset: 0;

  display: flex;
  justify-content: space-between;

  &::before,
  &::after {
    content: '';
    ${baseLine}
  }
`;
