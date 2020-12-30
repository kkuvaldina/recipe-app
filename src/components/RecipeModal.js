import React from "react";
import { Image, Modal, Button, List, Icon, Table } from "semantic-ui-react";
import { hideModal } from "../actions/ModalAction";
import { connect } from "react-redux";
import { RecipesList } from "./RecipesList";

export const RecipeModal = ({ recipe, hideModal, show }) => {
  const renderedHealthLabels = recipe.healthLabels.map((l) => {
    return <span>{l}</span>;
  });

  const renderedIngredients = recipe.ingredientLines.map((i) => {
    return (
      <List.Item>
        <Icon name="right triangle" />
        {i}
      </List.Item>
    );
  });

  const renderedNutritionInfo = recipe.digest.slice(0, 5).map((d) => {
    return (
      <Table.Row>
        <Table.Cell>{d.label}</Table.Cell>
        <Table.Cell>
          {Math.round(d.total)}
          {d.unit}
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <Modal open={show} closeIcon onClose={hideModal}>
      <Modal.Header>
        {recipe.label}
        <p className="health-labels">{renderedHealthLabels}</p>
      </Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={recipe.image} wrapped />
        <Modal.Description>
          <List>
            <List.Header>Ingredients:</List.Header> {renderedIngredients}
          </List>

          <div className="header">Nutrition Info:</div>
          <Table basic="very" compact collapsing unstackable>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Calories</Table.Cell>
                <Table.Cell> {Math.round(recipe.calories)}</Table.Cell>
              </Table.Row>
              {renderedNutritionInfo}
            </Table.Body>
          </Table>
          <div className="recipe-url">
            <a href={recipe.url} target="_blank">
              View Full Recipe
            </a>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={hideModal} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    recipe: state.modal.recipe,
    show: state.modal.show,
  };
};

export default connect(mapStateToProps, { hideModal })(RecipeModal);
