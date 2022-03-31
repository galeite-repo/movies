import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  height: 60px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  > h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
  }
`;
