/* eslint-disable default-param-last */
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      const copy1 = state.allCharacters;
      copy1.push(action.payload);
      return { ...state, myFavorites: copy1, allCharacters: copy1 };
    }
    case REMOVE_FAV: {
      const copy2 = state.myFavorites.filter(
        // eslint-disable-next-line comma-dangle
        (char) => char.id !== Number(action.payload)
      );
      return { ...state, myFavorites: copy2, allCharacters: copy2 };
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
