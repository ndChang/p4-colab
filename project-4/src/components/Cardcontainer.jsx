import React, {Component} from 'react'
import axios from 'axios'
import Card from './shared/Card'

class Cardcontainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            recipes: []
        }
    }
    renderCards = () => {
        let { recipes } = this.state
        let cards = []

        if(recipes.length) {
            for(let i = 0; i < 5 ; i++) {
                console.log(recipes[i].image)
                cards.push(<Card key={i} image={recipes[i].image} recipeName={recipes[i].recipeName} recipeDescription={recipes[i].recipeDescription} prepTime={recipes[i].prepTime} cookTime={recipes[i].cookTime} />)
            }
        }
        return cards
    }

    renderModal = (modal) =>{
         
    }
    componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        const food = await axios.get(`https://5dced59675f9360014c2642c.mockapi.io/recipes`)
    
        this.setState({
            recipes: food.data
        }, () => console.log(this.state.recipes,"look") )
      }

    render() {
        return (
            <div className={this.props.className}>
            { this.renderCards() }
            </div>
        )
    }
}
export default Cardcontainer
