import React from "react";
import Tag from "./Tag";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      searchTags: []
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
    this.setState(
      {
        searchTags: recipes
      },
      () => console.log(this.state.searchTags)
    );
  };
  renderTag = () => {
      if(this.state.searchTags.length){
        return  this.state.searchTags.map(searchTag => {
            if(this.state.recipes.includes(searchTag)){
                console.log("tag has been rendered", searchTag)
                return <Tag name={searchTag} />
            }
        })
      }
 
  };

  render() {
    return (
      <>
        <h1>THIS IS ROOT</h1>
        <div>{this.renderTag()}</div>
      </>
    );
  }
}
export default Container;
