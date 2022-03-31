import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 4rem;
  @media (max-width: 720px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.text};
  }
`;
