import React, {Component} from 'react'
import Card from './Card'
import recipes from '../data/recipes.json'

class Cardcontainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }
    renderCards = () => {
        if(recipes) {
            return recipes.map((recipe, index) => {
                console.log(recipe)
                return <Card key={ index } recipe={ recipe } />
            })
        }
    }

    render() {
        return (
            <>
            { this.renderCards() }
            </>
        )
    }
}
export default Cardcontainer
