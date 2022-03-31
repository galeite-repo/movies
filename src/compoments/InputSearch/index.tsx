import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Container } from './styles';

// interface InputSearchProps {
//   children: ReactNode;
// }

function InputSearch() {
  const [search, setSearch] = useState<string | undefined>();
  const router = useRouter();
  // Evento do form
  async function handleSearchMovie(e: FormEvent<HTMLFormElement>) {
    // desabilita o reload padrão do form
    e.preventDefault();
    // redireciona para a mesma página passando o query param search que foi setado no search
    return router.push(`/?search=${search}&page=1`);
  }
  return (
    <Container onSubmit={handleSearchMovie}>
      <input
        type="text"
        placeholder="Procure por um filme..."
        onChange={({ target }) => setSearch(target.value)}
      />
      <button type="submit">Pesquisar</button>
    </Container>
  );
}

export default InputSearch;
