/* eslint-disable default-param-last */
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    }
    case REMOVE_FAV: {
      return { ...state, myFavorites: action.payload };
    }
    case FILTER: {
      const copy3 = state.allCharacters.filter((char) => {
        if (action.payload === 'All') {
          return state.allCharacters;
        }
        return char.gender === action.payload;
      });
      return { ...state, myFavorites: copy3 };
    }
    case ORDER: {
      const copy4 = state.allCharacters;
      const order = copy4.sort((a, b) => {
        if (action.payload === 'A') {
          return a.id - b.id;
        }
        if (action.payload === 'D') {
          return b.id - a.id;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
