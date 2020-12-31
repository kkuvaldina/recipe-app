import React from "react";
import { Button, Container, Input, Icon, Image } from "semantic-ui-react";
import RecipesList from "./RecipesList.js";
import { connect } from "react-redux";
import { fetchRecipes, removeOldData } from "../actions/RecipesAction";
import lunchImage from "../images/lunch.svg";
import lowFatImage from "../images/low-fat.svg";
import lowCarbImage from "../images/low-carb.svg";
import snackImage from "../images/snack.svg";
import proteinImage from "../images/protein.svg";
import vegetableImage from "../images/vegetable.svg";

const App = ({ fetchRecipes, removeOldData }) => {
  const [searchWord, setSearchWord] = React.useState("");
  const topButton = document.getElementById("top-button");
  const arrayOfLabelsAndImages = [
    ["balanced", lunchImage],
    ["high-protein", proteinImage],
    ["high-fiber", vegetableImage],
    ["low-fat", lowFatImage],
    ["low-carb", lowCarbImage],
    ["low-sodium", snackImage],
  ];

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

  const handleMenuClick = (menuItem) => {
    removeOldData();
    fetchRecipes({ searchWord: menuItem, from: 0, to: 10 });
    setSearchWord(menuItem);
  };

  const renderedListOfRecipes = arrayOfLabelsAndImages.map((item) => {
    return (
      <div className="image-container" onClick={() => handleMenuClick(item[0])}>
        <Image className="image-icon" src={item[1]} size="tiny" />
        <span>{item[0]}</span>
      </div>
    );
  });

  return (
    <Container textAlign="center">
      <Input
        className="input-field"
        icon={
          <Icon name="search" inverted circular link onClick={handleSubmit} />
        }
        onKeyPress={onKeyPress}
        placeholder="Search for recipe..."
        value={searchWord}
        onChange={handleValue}
      />
      <div className="menu-container">{renderedListOfRecipes}</div>

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
