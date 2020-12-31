import axios from "axios";

const apiIngredientsURL = "https://api.edamam.com/search?";
const apiKey = "908ee7f39a90db79c62a136997ebfd01";

export const fetchRecipesAPI = ({ from, to, searchWord }) =>
  axios.get(
    `${apiIngredientsURL}q=${searchWord}&app_id=0ac46f36&app_key=${apiKey}&from=${from}&to=${to}`
  );


