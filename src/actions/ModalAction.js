export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showModal = (recipe) => (dispatch) => {
  dispatch({ type: SHOW_MODAL, payload: recipe });
};

export const hideModal = () => (dispatch) => {
  dispatch({ type: HIDE_MODAL });
};
