/* eslint-disable no-console */
let myFavorites = [];

function postFav(req, res) {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  const deleteChart = myFavorites.filter((char) => char.id !== id);
  myFavorites = deleteChart;
  return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };
