import { ButtonRounded } from '@/shared/ui';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledSwiperContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 160px 0 80px;
`;

export const StyledSwiper = styled(Swiper)`
  position: static;
  width: 100%;
`;

export const StyledButtonRounded = styled(ButtonRounded)`
  position: absolute;
  top: 50%;
  right: 40px;
  translate: 0 -50%;

  color: ${({ theme }) => theme.colors.content.accent.primary};
`;
