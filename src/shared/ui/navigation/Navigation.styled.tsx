import { getRems } from '@/shared/lib';
import { ButtonRounded } from '@/shared/ui';
import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  margin-bottom: 56px;
  padding-left: 80px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

export const StyledPrevButton = styled(ButtonRounded)`
  svg {
    rotate: 180deg;
  }
`;

export const StyledCounter = styled.p`
  width: fit-content;
  font-size: ${getRems(14)};
  line-height: normal;
  color: ${({ theme }) => theme.colors.content.base};
`;
