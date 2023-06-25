import Card from '../Card/Card';
import ContainerCards from './StyledCards';

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <ContainerCards>
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </ContainerCards>
  );
}
