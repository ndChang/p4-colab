import React from "react";
import Tag from "./shared/Tag";
import Search from "./Search";
import axios from 'axios';
import Cardcontainer from "./Cardcontainer";
import Nav from "./shared/Nav";
import Footer from "./shared/Footer";
import "./shared/styles/container.css";
import QuickViewCard from "./shared/QuickViewCard";


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTags: [],
      searchValue: ""
    };
  }
  componentDidMount() {
    this.setTag();
    this.fetchData();
  }

  fetchData = async () => {
    const food = await axios.get(`https://5dced59675f9360014c2642c.mockapi.io/recipes`)

    this.setState({
        recipes: food.data
    }, () => console.log(this.state.recipes,"look") )
  }

  setTag = () => {
    const recipes = [];
    this.setState({
      searchTags: recipes
    });
  };
  renderTag = () => {
    if (this.state.searchTags.length) {
      return this.state.searchTags.map(searchTag => {
        return (
          <Tag
            className="snack"
            name={`${searchTag} X`}
            onClick={() => this.handleClick(searchTag)}
          />
        );
      });
    }
  };
  handleClick = searchTag => {
    this.state.searchTags.splice(this.state.searchTags.indexOf(searchTag), 1);
    const searchTags = this.state.searchTags;
    this.setState({
      searchTags: searchTags
    });
  };
  handleChange = e => {
    let searchValue = e.target.value;
    this.setState({
      searchValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue.length === 0) {
      return;
    }
    let submission = this.state.searchValue;
    this.state.searchTags.push(submission);
    this.setState({
      searchValue: ""
    });
    e.target.reset()
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="flex">
          <Search
            onChange={this.handleChange}
            src="https://i.imgur.com/HqPHNNi.png"
            alt="Search icon"
            onSubmit={this.handleSubmit}
            text="Search by recipe, ingredient, cuisine"
          />
          {this.renderTag()}
        </div>
        <Cardcontainer className="cardContainer" recipe={this.state.recipes} />  
        
        <Footer />  
      </div>
    );
  }
}
export default Container;
