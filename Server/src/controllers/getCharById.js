const axios = require('axios');

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const character = response.data;
      const result = {
        // eslint-disable-next-line object-shorthand
        id: id,
        name: character.name,
        gender: character.gender,
        species: character.species,
        origin: character.origin,
        image: character.image,
        status: character.status,
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    })
    .catch((error) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    });
};

module.exports = getCharById;
