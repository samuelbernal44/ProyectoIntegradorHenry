const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

function getCharById(req, res) {
  const { id } = req.params;
  axios(URL + id)
    .then(({ data }) => {
      // eslint-disable-next-line object-curly-newline
      const { name, gender, species, origin, image, status } = data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.status(200).json(character);
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        res.status(404).send('Not Found');
      } else {
        res.status(500).send(error.message);
      }
    });
}

module.exports = getCharById;
