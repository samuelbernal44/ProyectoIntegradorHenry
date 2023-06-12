import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ContainerDetail, Image, Title1 } from './StyledDetail';

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          // eslint-disable-next-line no-alert
          window.alert('No hay personajes con ese ID');
        }
        // eslint-disable-next-line comma-dangle
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <ContainerDetail>
      <div>
        <Title1>{character?.name}</Title1>
        <h2>STATUS | {character?.status}</h2>
        <h2>SPECIE | {character?.species}</h2>
        <h2>GENDER | {character?.gender}</h2>
        <h2>ORIGIN | {character.origin?.name}</h2>
      </div>
      <Image src={character.image} alt="char detail" />
    </ContainerDetail>
  );
}

export default Detail;
