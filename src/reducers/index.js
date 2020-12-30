import { combineReducers } from "redux";
import { recipesReducer } from "./RecipesReducer";
import { modalReduser } from "./ModalReducer";

export default combineReducers({
  recipes: recipesReducer,
  modal: modalReduser,
});
