import { SHOW_MODAL, HIDE_MODAL } from "../actions/ModalAction";

const defaultState = {
  show: false,
  recipe: null,
};

export const modalReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true, recipe: action.payload };
    case HIDE_MODAL:
      return { ...state, show: false };
    default:
      return state;
  }
};
