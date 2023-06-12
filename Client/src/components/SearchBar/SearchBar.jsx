import { useState } from 'react';
import { ContainerSearchBar, Input, Button } from './StyledSearchBar';

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState('');

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <ContainerSearchBar>
      <Input type="search" onChange={handleChange} value={id} />
      <Button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </Button>
    </ContainerSearchBar>
  );
}
