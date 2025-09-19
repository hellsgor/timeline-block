import { getRems } from '@/shared/lib';
import styled from 'styled-components';

export const StyledPaginationButton = styled.div`
  position: relative;
  width: fit-content;
`;

export const StyledText = styled.span`
  position: absolute;
  top: 50%;
  left: calc(100% + 20px);
  translate: 0 -50%;

  font-size: ${getRems(20)};
  font-weight: 700;
  color: ${(props) => props.color || props.theme.colors.content.base};
`;
