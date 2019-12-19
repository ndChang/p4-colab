import React from "react";
import "./styles/quickviewcard.css";
import plusbutton from './styles/images/plusbutton.png'
const QuickViewCard = props => {
    return (
        <div className="quick-view-cont">
            <div className="quick-card">

                <div className="close-modal">
                    <button onClick={() => props.onClick()}>close</button>
                </div>
                <h2 className="quick-recipeName">{props.recipeName}</h2>
                <div className="quick-view-recipe-main">
                    <div className="quick-view-recipe-main-left">
                        <img src={props.image} />
                        <div className="quick-recipeDesc">{props.recipeDescription}</div>
                    </div>
                    <div className="quick-view-recipe-main-right">
                        <div className="quick-prepTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Prep Time: </strong> {props.prepTime}
                        </div>
                        <div className="quick-cookTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Cook Time: </strong> {props.cookTime}


                        </div>
                        <div className='ingred-container'>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

    );
};

export default QuickViewCard;
