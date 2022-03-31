import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    height: 3rem;
    width: 100%;
    border: 0;
    background-color: ${({ theme }) => theme.white};
    border-radius: 5px 0px 0px 5px;
    color: ${({ theme }) => theme.text};
    padding: 0 10px;
    font-size: 16px;
    outline: 0;
    @media (max-width: 450px) {
      padding: 1.4rem;
      font-size: 1rem;
    }
  }
  > button {
    width: fit-content;
    padding: 1rem 1rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    color: ${({ theme }) => theme.white};
    border-radius: 0px 5px 5px 0px;
    border: 0;

    transition: 0.5s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
