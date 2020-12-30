import { fetchRecipesAPI } from "../utils/api";

export const FETCH_RECIPES = "FETCH_RECIPES";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";
export const REMOVE_OLD_DATA = "REMOVE_OLD_DATA";

export const fetchRecipes = (searchObj) => async (dispatch) => {
  dispatch({ type: FETCH_RECIPES });

  try {
    const response = await fetchRecipesAPI(searchObj);

    if (response && response.data) {
      dispatch({
        type: FETCH_RECIPES_SUCCESS,
        payload: { items: response.data.hits, hasMore: response.data.more },
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_RECIPES_ERROR,
    });
  }
};

export const removeOldData = () => (dispatch) => {
  dispatch({ type: REMOVE_OLD_DATA });
};
