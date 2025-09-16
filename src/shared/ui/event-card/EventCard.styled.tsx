import { getRems } from '@/shared/lib';
import styled from 'styled-components';

export const StyledEventCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const StyledTitle = styled.p`
  font-family: Bebas, sans-serif;
  font-size: ${getRems(24)};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.content.accent.primary};
  text-transform: uppercase;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.content.base};
`;
