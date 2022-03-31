import { Container } from './styles';

interface DescriptionProps {
  title: string;
}

function Description({ title }: DescriptionProps) {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
}

export default Description;
