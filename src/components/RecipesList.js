import React from "react";
import { Card, Image } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/RecipesAction";
import { showModal } from "../actions/ModalAction";
import RecipeModal from "./RecipeModal";

const recipesPerPage = 10;

export const RecipesList = ({
  recipesList,
  searchWord,
  fetchRecipes,
  hasMore,
  showModal,
  show,
}) => {
  const renderedList = recipesList.map((r) => {
    return (
      <Card className="recipe-card" onClick={() => showModal(r.recipe)} key={uuidv4()}>
        <Card.Header>{r.recipe.label}</Card.Header>{" "}
        <Image src={r.recipe.image} wrapped ui={false} />
      </Card>
    );
  });

  const getRecipes = () => {
    fetchRecipes({
      from: recipesList.length,
      to: recipesList.length + recipesPerPage,
      searchWord,
    });
  };

  return (
    <>
      {show ? <RecipeModal /> : null}

      <InfiniteScroll
        initialLoad={false}
        pageStart={1}
        loadMore={getRecipes}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        threshold={500}
      >
        <Card.Group  centered>
          {renderedList}
        </Card.Group>
      </InfiniteScroll>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recipesList: state.recipes.items,
    hasMore: state.recipes.hasMore,
    show: state.modal.show,
  };
};

export default connect(mapStateToProps, { fetchRecipes, showModal })(
  RecipesList
);
