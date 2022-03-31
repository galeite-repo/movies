import Image from 'next/image';
import Moment from 'react-moment';
import { AiOutlineStar } from 'react-icons/ai';
import Description from './Description';
import { Container, Rating, Year } from './styles';

interface MovieItemProps {
  title: string;
  urlImage: string;
  rating: string;
  date: string;
}

function MovieItem({ title, urlImage, rating, date }: MovieItemProps) {
  return (
    <Container>
      <Image
        src={`http://image.tmdb.org/t/p/w500${urlImage}`}
        alt="image movie"
        className="image-ajust"
        width={370}
        height={500}
      />
      <Rating>
        <AiOutlineStar size={15} />
        <span>{rating}</span>
      </Rating>

      <Year>
        <span>
          <Moment format="YYYY">{date}</Moment>
        </span>
      </Year>
      <Description title={title} />
    </Container>
  );
}

export default MovieItem;
