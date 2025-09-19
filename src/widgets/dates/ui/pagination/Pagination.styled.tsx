import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 390px;
`;

export const StyledRound = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  aspect-ratio: 1/1;
  width: 530px;
  border: 1px solid ${({ theme }) => theme.colors.content.base};
  border-radius: 50%;

  opacity: 0.2;
`;
