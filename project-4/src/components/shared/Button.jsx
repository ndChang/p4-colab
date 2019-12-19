import React from "react";
import plusbutton from "./styles/images/plusbutton.png";
import minusbutton from "./styles/images/minusbutton.png";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  wasAddedToCart = () => {
    if (!this.state.clicked) {
      return (
        <img
          src={plusbutton}
          s
          onClick={() => {
            this.setState({ clicked: true });

            this.props.increment();
          }}
        />
      );
    } else {
      // this.setState({clicked: false})
      return (
        <img
          src={minusbutton}
          onClick={() => {
            this.setState({ clicked: false });
            this.props.decrement();
          }}
        />
      );
    }
  };

  render() {
    return (
      <div className="ingredients">
        <p>{this.props.name}</p>
        {this.wasAddedToCart()}
      </div>
    );
  }
}

export default Button;
