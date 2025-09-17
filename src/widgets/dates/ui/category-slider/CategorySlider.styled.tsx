import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledSwiperContainer = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  height: 170px;
  padding: 0 160px 0 80px;
`;

export const StyledSwiper = styled(Swiper)`
  position: static;
  align-self: center;
  width: 100%;
`;
