import React, {Component} from "react"
import axios from 'axios'
import Card from './Card'
import "./styles/quickviewcard.css"
import plusbutton from './styles/images/plusbutton.png'
import xbutton from './styles/images/xbutton.png'
import fivestars from './styles/images/fivestars.png'
import button from './Button'
import Button from "./Button"

class QuickViewCard extends Component {
    constructor(props){
        super(props) 

        this.state = {
            ingredient: []
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        const ingredients = await axios.get(`https://5dced59675f9360014c2642c.mockapi.io/recipes/1/ingredients`)
        this.setState({
            ingredient: ingredients.data
        })
      }

    renderIngredients = () => {
        const newArr = []
        if (this.state.ingredient.length) {
         this.state.ingredient.map(ingredient => {
          // newArr.push(<p>{ingredient.name} <img src={plusbutton} onClick={()=> this.updateCart()}/></p>) 
          newArr.push(<Button name={ingredient.name} increment={this.props.increment} decrement={this.props.decrement}/>) 
                
          });
        }
        console.log(newArr)
        return <>{newArr}</>
      };

    updateCart = () => {
      
      return this.props.decrement()
    }

    render() {
      // console.log(this.props.decrement)
      // console.log(this.props.increment)
        
    return (
        <div className="quick-view-cont">
            <div className="quick-card">

                <div className="close-modal">

                    <button className='close-button' onClick={() => this.props.onClick()}>
                        <img src={xbutton}></img></button>
                </div>
                <h2 className="quick-recipeName">{this.props.recipeName}</h2>
                <div className="quick-view-recipe-main">
                    <div className="quick-view-recipe-main-left">

                        <img src={this.props.image} />
                        <div className='rating-container'>
                        <img src ={fivestars} className='five-stars' ></img>
                         <p className='rating-numb'>(49)</p>
                         </div>


                        <div className="quick-recipeDesc">{this.props.recipeDescription}</div>

                    </div>
                    <div className="quick-view-recipe-main-right">
                        <div className="quick-prepTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Prep Time: </strong>  {this.props.prepTime} min
                          
                        </div>
                        <div className="quick-cookTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Cook Time: </strong>  {this.props.cookTime} min

                        </div>
                <div className='list-container'>
                        {this.renderIngredients()}
                        <div className='ingredients'>
                        
                </div>
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
//         `https://5dced59675f9360014c2642c.mockapi.io/recipes/1/ingredients`
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
