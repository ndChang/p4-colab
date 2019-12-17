import React, {Component} from 'react'


class Card extends Component {
    constructor (props) {
        super(props)
        this.state = {
            recipes: []
        }
    }
    render() {
        console.log(this.props.recipe)
        return (
            <div className="main">
            <img src={this.props.recipe.image} />
            <div>{this.props.recipe.label}</div>
            <div>{this.props.recipe.totalTime}</div>
            <div></div>
            </div>
        )
    }
    
}
export default Card
