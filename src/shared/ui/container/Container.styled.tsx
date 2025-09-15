import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1504px;
  margin: 0 auto;
  padding: 0 32px;

  @media ${({ theme }) => theme.media.phone} {
    padding-right: 20px;
    padding-left: 20px;
  }
`;
