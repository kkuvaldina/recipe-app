import React from "react";
import { Button, Container, Input, Icon } from "semantic-ui-react";
import RecipesList from "./RecipesList.js";
import { connect } from "react-redux";
import { fetchRecipes, removeOldData } from "../actions/RecipesAction";

const App = ({ fetchRecipes, removeOldData }) => {
  const [searchWord, setSearchWord] = React.useState("");
  const topButton = document.getElementById("top-button");

  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  const handleTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    removeOldData();
    fetchRecipes({ searchWord, from: 0, to: 10 });
  };

  const handleValue = (e) => {
    setSearchWord(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container textAlign="center">
      <Input
        className="input-field"
        icon={
          <Icon name="search" inverted circular link onClick={handleSubmit} />
        }
        onKeyPress={onKeyPress}
        placeholder="Search..."
        value={searchWord}
        onChange={handleValue}
      />
      <Button
        color="teal"
        title="Go To Top"
        id="top-button"
        onClick={handleTopButton}
      >
        Top
      </Button>

      <RecipesList
        className="recipes-list"
        searchWord={searchWord}
      ></RecipesList>
    </Container>
  );
};

export default connect(null, { fetchRecipes, removeOldData })(App);
