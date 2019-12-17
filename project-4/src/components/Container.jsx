import React from 'react'
import Tag from './shared/Tag'
import Search from './Search'
import Card from './shared/Card'
import Cardcontainer from './Cardcontainer'
import Nav from './shared/Nav'
import Footer from './shared/Footer'
import './shared/styles/container.css'

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
    this.loadRecipes();
    this.setTag();
  }

  loadRecipes = () => {
    const recipes = ["chicken", "pork", "duck", "spag", "beef", "tofu"];
    this.setState(
      {
        recipes: recipes
      },
      () => console.log(this.state.recipes)
    );
  };

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
    console.log(this.state.searchTags.indexOf(searchTag));
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
  };

  render() {
    console.log("render");
    return (
      <>
      <Nav/>
        <h1>THIS IS ROOT</h1>
        <Cardcontainer recipes={ this.state.recipes } />
        <div className="flex">
          <Search
            onChange={this.handleChange}
            alt="Search icon"
            onSubmit={this.handleSubmit}
            text="Search by recipe, ingredient, cuisine"
          />
        <div>{this.renderTag()}</div>
        <Search onChange={this.handleChange} alt='Search icon' onSubmit={this.handleSubmit} text="Search by recipe, ingredient, cuisine"/>
        <Footer/>

      </>
    );
  }
}
export default Container
