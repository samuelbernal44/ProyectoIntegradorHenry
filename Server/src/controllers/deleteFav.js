/* eslint-disable max-len */
const { Favorite } = require('../DB_connection');

async function deleteFav(req, res) {
  try {
    const { id } = req.params; // Obtiene el id del personaje a eliminar de los parámetros de la ruta
    await Favorite.destroy({ where: { id } }); // Elimina el personaje de la tabla de favoritos
    const favorites = await Favorite.findAll(); // Obtiene todos los personajes favoritos restantes
    res.json(favorites); // Responde con un arreglo que contiene a todos los personajes favoritos
  } catch (error) {
    res.status(500).json({ error: error.message }); // En caso de error, responde con status 500 y el mensaje del error
  }
}

module.exports = deleteFav;
