import {
  ContainerCard,
  Image,
  ContainerButton,
  Button,
  ContainerData,
  Title2,
  Title4,
  ContainerImage,
} from "./StyledCard";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
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
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <ContainerButton>
          {currentPath === "/favorites" ? null : (
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

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
