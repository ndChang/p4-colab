import React, { Component } from "react";
import axios from "axios";
import Card from "./shared/Card";
import QuickViewCard from "./shared/QuickViewCard";

class Cardcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      showOverlay: false,
      qView: {}
    };
  }

  handleClick = qView => {
    this.setState({
      qView: qView
    });
    this.toggleOverlay();
  };
  toggleOverlay = () => {
    this.setState(state => ({
      showOverlay: !state.showOverlay
    }));
  };

  updateCart = () => {
    console.log("item was clicked");
  };
  renderOverlay = () => {
    while (this.state.showOverlay) {
      const qView = this.state.qView;
      return (
        <QuickViewCard
          onClick={this.toggleOverlay}
          // image={qView.image}
          // recipeName={qView.recipeName}
          // recipeDescription={qView.recipeDescription}
          prepTime={qView.prepTime}
          cookTime={qView.cookTime}
          // listName="Ingredients"
          // listItemClick={this.updateCart}
          // {...qView}
          decrement={this.props.decrement}
          increment={this.props.increment}
        //   cartCount={this.props.cartCount}
        />
      );
    }
  };

  renderCards = () => {
    let { recipes } = this.state;
    let cardsAt10 = [];
    let cardsAbove10 = [];
    if (recipes.length) {
      {
        this.renderOverlay();
      }
      for (let i = 0; i < 5; i++) {
        let time = recipes[i].cookTime + recipes[i].cookTime;
        if (time <= 10) {
          cardsAt10.push(
            <Card
              key={i}
              image={recipes[i].image}
              recipeName={recipes[i].recipeName}
              recipeDescription={recipes[i].recipeDescription}
              prepTime={recipes[i].prepTime}
              cookTime={recipes[i].cookTime}
              onClick={() => {
                this.handleClick(recipes[i]);
              }}
            />
          );
        } else {
          cardsAbove10.push(
            <Card
              key={i}
              image={recipes[i].image}
              recipeName={recipes[i].recipeName}
              recipeDescription={recipes[i].recipeDescription}
              prepTime={recipes[i].prepTime}
              cookTime={recipes[i].cookTime}
              onClick={() => this.handleClick(recipes[i])}
            />
          );
        }
      }
    }
    return [
      <h4 className="ten-min">10 minutes</h4>,
      <div className={this.props.className}>{cardsAt10}</div>,
      <h4 className="ten-min">15 minutes</h4>,
      <div className={this.props.className}>{cardsAbove10}</div>
    ];
  };

  // renderModal = modal => { };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const food = await axios.get(
      `https://5dced59675f9360014c2642c.mockapi.io/recipes/`
    );

    this.setState({
      recipes: food.data
    });
  };

  render() {
    console.log("increment", this.props.increment);
    // console.log("decrement", this.props.decrement)
    return (
      <>
        {this.renderOverlay()}
        {this.renderCards([])}
      </>
    );
  }
}
export default Cardcontainer;
