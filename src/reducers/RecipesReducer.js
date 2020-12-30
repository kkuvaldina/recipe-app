import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR, 
  REMOVE_OLD_DATA
} from "../actions/RecipesAction";

const defaultState = {
  items: [],
  loading: false,
  error: false,
  hasMore: false
};

export const recipesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, loading: true };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload.items],
        loading: false,
        hasMore: action.payload.hasMore
      };
    case FETCH_RECIPES_ERROR:
      return { ...state, error: true };
    case REMOVE_OLD_DATA:
      return { ...state, items: [], hadMore: false };
    default:
      return state;
  }
};
