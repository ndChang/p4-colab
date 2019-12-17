import React from 'react'
import Tag from './Tag'
import Search from './Search'
import Card from './Card'

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
    const recipes = ["chicken", "pork", "duck"];
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
        if (this.state.recipes.includes(searchTag)) {
          return <Tag name={searchTag} />;
        }
      });
    }
  };
  handleChange = e => {
    let searchValue = e.target.value;
    this.setState(
      {
        searchValue
      },
      () => console.log(this.state.searchValue)
    );
  };

  handleSubmit = e => {
      e.preventDefault()
      let submission = this.state.searchValue
        this.state.searchTags.push(submission)
        console.log(this.state.searchTags)
  }

  render() {
    return (
      <>
        <h1>THIS IS ROOT</h1>
        <div>{this.renderTag()}</div>
        <Search onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Card />
      </>
    );
  }
}
export default Container;
