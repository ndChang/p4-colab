import React from 'react'
import Tag from './shared/Tag'
import Search from './Search'
import Card from './shared/Card'
import Nav from './shared/Nav'
import Footer from './shared/Footer'
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
    const recipes = ["chicken", "beef", "pork", "duck"];
    this.setState({
      searchTags: recipes
    });
  };
  renderTag = () => {
    if (this.state.searchTags.length) {
      return this.state.searchTags.map(searchTag => {
        // if (this.state.recipes.includes(searchTag)) {
          return <Tag name={searchTag} onClick={this.handleClick(searchTag)} />;
        // }
      });
    }
  };
  handleClick = e => {
    //   this.state.searchTags.splice(this.state.searchTags.indexOf(searchTag))
  };
  handleChange = e => {
    let searchValue = e.target.value;
    this.setState(
      {
        searchValue
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    let submission = this.state.searchValue;
    this.state.searchTags.push(submission);
    this.setState({
        searchValue:submission
    })
  };

  render() {
      console.log("render")
    return (
      <>
      <Nav/>
        <h1>THIS IS ROOT</h1>
        <div>{this.renderTag()}</div>
        <Search onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Card />
        <Footer/>
      </>
    );
  }
}
export default Container;
