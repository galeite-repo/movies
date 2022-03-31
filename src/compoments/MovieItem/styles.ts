import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 3rem 2rem 3rem;
  /* margin-bottom: 2rem; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: 350px;
  height: 450px;
`;

export const Rating = styled.div`
  position: absolute;
  top: -23px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px;
  width: 3rem;
  text-align: center;
  border-radius: 0px 10px 0px 10px;
  color: ${({ theme }) => theme.primary};
  > span {
    font-size: 1rem;
  }
`;

export const Year = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: -23px;
  left: 0;
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px;
  width: 4.2rem;
  text-align: center;
  border-radius: 10px 0px 10px 0px;
  color: ${({ theme }) => theme.text};
  > span {
    font-size: 1rem;
  }
`;
