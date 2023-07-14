/* eslint-disable object-curly-newline */
const { Favorite } = require('../DB_connection');

// eslint-disable-next-line consistent-return
async function postFav(req, res) {
  const { id, name, origin, status, image, species, gender } = req.body;
  if (!id || !name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send('Faltan datos');
  }
  try {
    await Favorite.findOrCreate({
      where: { id },
      defaults: { name, origin, status, image, species, gender },
    });
    const favorites = await Favorite.findAll();
    res.json(favorites);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = postFav;
