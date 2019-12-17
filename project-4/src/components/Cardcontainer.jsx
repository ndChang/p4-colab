import React, {Component} from 'react'
import Card from './shared/Card'
// import recipes from '../data/recipes.json'

class Cardcontainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }
    renderCards = () => {

        let cards = []

        if(recipes.length) {
            for(let i = 0; i < 5 ; i++) {
                console.log(recipes[i].image)
                cards.push(<Card key={i} image={recipes[i].image} label={recipes[i].label} totalTime={recipes[i].totalTime}/>)
            }
        }
        return cards
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
