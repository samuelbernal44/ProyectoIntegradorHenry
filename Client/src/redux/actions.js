/* eslint-disable arrow-body-style */
import axios from 'axios';

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  // eslint-disable-next-line consistent-return
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  // eslint-disable-next-line consistent-return
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
