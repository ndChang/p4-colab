import React, {Component} from "react"
import axios from 'axios'
import "./styles/quickviewcard.css"
import xbutton from './styles/images/xbutton.png'
import fivestars from './styles/images/fivestars.png'
import Button from "./Button"


import clock from './styles/images/clock.png'

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
     
    return (
        <>
<div className='quick-view-desktop'>
        <div className="quick-view-cont">
            <div className="quick-card">

                <div className="close-modal">

                    <button className='close-button' onClick={() => this.props.onClick()}>
                        <img src={xbutton}></img></button>
                </div>
                <h2 className="quick-recipeName">{this.props.recipeName}</h2>
                <div className="quick-view-recipe-main">
                    <div className="quick-view-recipe-main-left">

                        <img  className='quick-view-image'src={this.props.image} />
                        <div className='rating-container'>
                        <img src ={fivestars} className='five-stars' ></img>
                         <p className='rating-numb'>(49)</p>
                         </div>


                        <div className="quick-recipeDesc">This Simple Poached Egg and Avocado Toast 
                        recipe is so simple and so delicious! Real, healthy food never tasted so good. 
                        Top with a pinch of salt and pepper and sprig of parsley as a garnish. 
                        Try to quarter a heirloom tomatoe! 
</div>

                    </div>
                    <div className="quick-view-recipe-main-right">
                        <div className="quick-prepTime">
                            <img src={clock} />

                            <strong>Prep Time: </strong>  {this.props.prepTime} min
                          
                        </div>
                        <div className="quick-cookTime">
                            <img src={clock} />

                            <strong>Cook Time: </strong>  {this.props.cookTime} min

                        </div>
                <div className='list-container'>

                        {this.renderIngredients()}
                        
                        </div>

                    </div>

                </div>
            </div>

        </div>
        </div>




            <div className='mobile-cart-container'>

                <div className="close-modal2">
                    <p>Recipe</p>
                    <button className='close-button2' onClick={() => this.props.onClick()}>
                        <img src={xbutton}></img></button>
                </div>
                <div className="quick-card2">
                    <h2 className="quick-recipeName2">{this.props.recipeName}</h2>
                    </div>
                    
                    <div className='rating-container2'>
                        <img src={fivestars} className='five-stars2' ></img>
                        <p className='rating-numb2'>(49)</p>
                        </div>
             

            <div className='image2-container'>
            <img  className='quick-view-image2'src={this.props.image}></img>
            </div>





            <div className='clock2-container'>
            <div className="quick-prepTime2">
                <img src={clock} />

                <strong>Prep Time: </strong>  {this.props.prepTime} min
              
            </div>
            <div className="quick-cookTime2">
                <img src={clock}  />

                <strong>Cook Time: </strong>  {this.props.cookTime} min

             </div>
             </div>




            
    <div className='list-container2'>

            {this.renderIngredients()}
            

        </div>

    </div>

        </>
    
    )};
};

export default QuickViewCard;
