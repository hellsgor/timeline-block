import { ButtonRounded } from '@/shared/ui';
import styled from 'styled-components';

export const StyledButtonRounded = styled(ButtonRounded)`
  position: absolute;
  top: 50%;
  right: 40px;
  translate: 0 -50%;

  color: ${({ theme }) => theme.colors.content.accent.primary};
`;
