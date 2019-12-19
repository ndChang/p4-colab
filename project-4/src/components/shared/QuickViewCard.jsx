import React, {Component} from "react"
import axios from 'axios'
import Card from './Card'
import "./styles/quickviewcard.css"
import plusbutton from './styles/images/plusbutton.png'

class QuickViewCard extends Component {
    constructor(props){
        super(props) 

        this.state = {
            ingredient: null
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        const ingredients = await axios.get(`https://5dced59675f9360014c2642c.mockapi.io/recipes/1/ingredients`)
        console.log("lookhere", ingredients)
        this.setState({
            ingredient: ingredients.data
        }, () => console.log(this.state.ingredient,"look") )
      }

    renderIngredients = () => {
        if (this.state.ingredients.length) {
          return this.state.ingredients.map(ingredient => {
            return (
              <Card
                className="ingredient"
                name={`${ingredient}`}
                onClick={() => this.handleClick(ingredient)}
              />
            );
          });
        }
      };

    render() {
    return (
        <div className="quick-view-cont">
            <div className="quick-card">

                <div className="close-modal">
                    <button onClick={() => this.props.onClick()}>close</button>
                </div>
                <h2 className="quick-recipeName">{this.props.recipeName}</h2>
                <div className="quick-view-recipe-main">
                    <div className="quick-view-recipe-main-left">
                        <img src={this.props.image} />
                        <div className="quick-recipeDesc">{this.props.recipeDescription}</div>
                    </div>
                    <div className="quick-view-recipe-main-right">
                        <div className="quick-prepTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Prep Time: </strong> {this.props.prepTime}
                        </div>
                        <div className="quick-cookTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Cook Time: </strong> {this.props.cookTime}


                        </div>
                        <div className='ingred-container'>

                            <div>{this.props.ingredient}</div>
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
    
    )};
};

export default QuickViewCard;

// class QuickViewCard extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

//   componentDidMount() {
//     this.fetchData();
// }

// fetchData = async () => {
//     const food = await axios.get(
//         `https://5dced59675f9360014c2642c.mockapi.io/recipes/`
//     );

//     this.setState({
//     });
// };

//   render() {
//     console.log(this.props)
//     return (
//       <div className="quick-view-cont">
//         <div className="quick-card">
//           <div className="close-modal">
//             <button onClick={() => props.onClick()}>close</button>
//           </div>
//           <h2 className="recipeName">{props.recipeName}</h2>
//           <div className="quick-view-recipe-main">
//             <div className="quick-view-recipe-main-left">
//               <img src={props.image} />
//               <div className="recipeDesc">{props.recipeDescription}</div>
//             </div>
//             <div className="quick-view-recipe-main-right">
//               <div className="prepTime">
//                 <img src="https://i.imgur.com/BNM27qD.png" />
//                 <strong>Prep Time: </strong> {props.prepTime}
//               </div>
//               <div className="cookTime">
//                 <img src="https://i.imgur.com/BNM27qD.png" />
//                 <strong>Cook Time: </strong> {props.cookTime}
//               </div>
//               <ul onClick={() => props.listItemClick()}>{props.listName}</ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default QuickViewCard;
