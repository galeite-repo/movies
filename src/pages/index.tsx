import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../compoments/Header';
import { HomeContainer, MovieContainer } from '../styles/HomeStyles';
import { config } from '../config/api';
import MovieItem from '../compoments/MovieItem';
import Footer from '../compoments/Footer';

// declaração de tipos das propriedades que o component Home espera receber
interface IPropsComponent {
  list: any[];
  // search: boolean;
  searchParam: string;
}
const Home = ({ list, searchParam }: IPropsComponent) => {
  const [data, setData] = useState<any[]>([]);
  const [, setResult] = useState<undefined | string>(undefined);

  useEffect(() => {
    setData(list);
    setResult(searchParam);
  }, [list, searchParam]);

  return (
    <HomeContainer>
      <Head>
        <title> The Movies | Filmes da Semana</title>

        <meta
          name="description"
          content="Projeto integração de API em Nexjs. Filmes, Movies"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Projeto integração de API em Nexjs. Filmes, Movies"
        />
      </Head>
      <Header />
      <main>
        {data.map((item: any, index: number) => (
          <MovieContainer key={index}>
            <MovieItem
              title={item.title}
              urlImage={item.poster_path}
              rating={item.vote_average}
              date={item.release_date}
            />
          </MovieContainer>
        ))}
      </main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;

// função getServerSideProps será executado no lado do servidor, possibilitado o Server Side Rendering
export async function getServerSideProps({
  query // query params
}: {
  query: {
    page?: string; // parâmetro page enviada na url
    search?: string; // parâmetro search page enviada na urr
  };
}) {
  if (query.search) {
    // É efetuada uma requisição GET para o servidor, retornando os dados do filme que foi passado no query param search
    const response = await fetch(
      `${config.base_url}/search/movie?api_key=${
        config.api_key // chave de acesso a API
      }&query=${
        query.search // query param search
      }&page=${
        query.page ? query.page : 1 // caso não tenha sido enviado o valor page, será definido o valor 1 por default
      }&language=pt-BR`
    );

    // desestruturação dos dados retornados no response pegando os valores results, page, totalPages
    const { results, page } = (await response.json()) as any;
    return {
      props: {
        list: results,
        page,
        searchParam: query.search
      }
    };
  }
  // É efetuada uma requisição GET para o servidor, retornando os dados de todos os filmes
  const response = await fetch(
    `${config.base_url}/trending/movie/day?api_key=${
      config.api_key // chave de acesso a API
    }&page=${
      query.page ? query.page : 1 // caso não tenha sido enviado o valor page, será definido o valor 1 por default
    }&language=pt-BR`
  );
  const { results, page } = (await response.json()) as any;

  return {
    props: {
      list: results,
      page,
      searchParam: ''
    }
  };
}
