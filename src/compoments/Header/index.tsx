import { RiMovieFill } from 'react-icons/ri';
import InputSearch from '../InputSearch';
import { Container, Logo } from './styles';

// interface HeaderProps {
//   children: ReactNode;
// }
// { children }: HeaderProps
function Header() {
  return (
    <>
      <Container>
        <Logo>
          <RiMovieFill size={70} color="#374045" />
          <h1>Filmes da Semana</h1>
        </Logo>
        <InputSearch />
      </Container>
    </>
  );
}

export default Header;
