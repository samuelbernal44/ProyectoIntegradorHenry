import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { ContainerNav, Button } from './StyledNav';

export default function Nav(props) {
  const { onSearch } = props;
  return (
    <ContainerNav>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
      <Link to="/favorites">
        <Button>Favorites</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </ContainerNav>
  );
}
