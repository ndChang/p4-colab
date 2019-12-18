import React from "react";
import "./styles/quickviewcard.css";

const QuickViewCard = props => {
  return (
    <div className="quick-view-cont">
      <div className="quick-card">
        <div className="close-modal">
          <button onClick={() => props.onClick()}>close</button>
        </div>
        <h2 className="recipeName">{props.recipeName}</h2>
        <div className="quick-view-recipe-main">
          <div className="quick-view-recipe-main-left">
            <img src={props.image} />
            <div className="recipeDesc">{props.recipeDescription}</div>
          </div>
          <div className="quick-view-recipe-main-right">
            <div className="prepTime">
              <strong>Prep Time: </strong> {props.prepTime}
            </div>
            <div className="cookTime">
              <strong>Cook Time: </strong> {props.cookTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewCard;
