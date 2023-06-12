import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import {
  ContainerCard,
  Image,
  ContainerButton,
  Button,
  ContainerData,
  Title2,
  Title4,
  ContainerImage,
} from './StyledCard';

function Card(props) {
  const {
    id,
    name,
    // status,
    species,
    gender,
    // origin,
    image,
    onClose,
    // eslint-disable-next-line no-shadow
    addFav,
    // eslint-disable-next-line no-shadow
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    // eslint-disable-next-line no-unused-expressions
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ContainerCard>
      <ContainerImage>
        {isFav ? (
          <button type="button" onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button type="button" onClick={handleFavorite}>
            🤍
          </button>
        )}
        <ContainerButton>
          {currentPath === '/favorites' ? null : (
            <Button
              onClick={() => {
                onClose(id);
                removeFav(id);
              }}
            >
              X
            </Button>
          )}
        </ContainerButton>
        <Image src={image} alt={name} />
        <Link to={`/detail/${id}`}>
          <Title2>{name}</Title2>
        </Link>
      </ContainerImage>
      <ContainerData>
        {/* <Title4>Status: {status}</Title4> */}
        <Title4>{species}</Title4>
        <Title4>{gender}</Title4>
        {/* <Title4>Origin: {origin}</Title4> */}
      </ContainerData>
    </ContainerCard>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addFav: (character) => {
    dispatch(addFav(character));
  },
  removeFav: (id) => {
    dispatch(removeFav(id));
  },
});

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
