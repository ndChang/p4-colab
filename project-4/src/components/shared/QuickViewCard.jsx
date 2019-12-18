import React from "react";
import './styles/quickviewcard.css'

const QuickViewCard = props => {


  return (
      
    <div className="quick-view-cont">
      <div className="quick-card">
          <button onClick={ () => props.onClick()}>close</button>
        <img src={props.image} />
        <div className="recipeName">{props.recipeName}</div>
        <div className="recipeDesc">{props.recipeDescription}</div>
        <div className="prepTime">
          <strong>Prep Time: </strong> {props.prepTime}
        </div>
        <div className="cookTime">
          <strong>Cook Time: </strong> {props.cookTime}
        </div>
      </div>
    </div>
  );
};

export default QuickViewCard;
