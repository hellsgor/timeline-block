import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1504px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.safeIndents.desktop};

  @media ${({ theme }) => theme.media.horTablet} {
    padding: 0 ${({ theme }) => theme.safeIndents.tablet};
  }
`;
