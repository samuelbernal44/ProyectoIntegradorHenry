import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { ContainerCards, ContainerFilters, Select } from './StyledFavorites';
import { filterCards, orderCards } from '../../redux/actions';

function Favorites(props) {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <ContainerFilters>
        <Select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </Select>
        <Select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </ContainerFilters>
      <ContainerCards>
        {myFavorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin}
            image={char.image}
          />
        ))}
      </ContainerCards>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps, null)(Favorites);
