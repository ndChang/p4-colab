import React from "react";
import "./styles/quickviewcard.css";
import plusbutton from './styles/images/plusbutton.png'
const QuickViewCard = props => {
    console.log(props.decrement)
    return (
        <div className="quick-view-cont">
            <div className="quick-card">

                <div className="close-modal">
                    <button onClick={() => props.onClick()}>close</button>
                </div>
                <h2 className="quick-recipeName">{props.recipeName}</h2>
                <div className="quick-view-recipe-main">
                    <div className="quick-view-recipe-main-left">
                        <img src={props.image} />
                        <div className="quick-recipeDesc">{props.recipeDescription}</div>
                    </div>
                    <div className="quick-view-recipe-main-right">
                        <div className="quick-prepTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Prep Time: </strong> {props.prepTime}
                        </div>
                        <div className="quick-cookTime">
                            <img src="https://i.imgur.com/BNM27qD.png" />

                            <strong>Cook Time: </strong> {props.cookTime}


                        </div>
                        <div className='ingred-container'>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                            <p>2 eggs<img src={plusbutton}></img></p>
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>

    );
};

export default QuickViewCard;

// class QuickViewCard extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

//   componentDidMount() {
//     this.fetchData();
// }

// fetchData = async () => {
//     const food = await axios.get(
//         `https://5dced59675f9360014c2642c.mockapi.io/recipes/1/ingredients`
//     );

//     this.setState({
//     });
// };

//   render() {
//     console.log(this.props)
//     return (
//       <div className="quick-view-cont">
//         <div className="quick-card">
//           <div className="close-modal">
//             <button onClick={() => props.onClick()}>close</button>
//           </div>
//           <h2 className="recipeName">{props.recipeName}</h2>
//           <div className="quick-view-recipe-main">
//             <div className="quick-view-recipe-main-left">
//               <img src={props.image} />
//               <div className="recipeDesc">{props.recipeDescription}</div>
//             </div>
//             <div className="quick-view-recipe-main-right">
//               <div className="prepTime">
//                 <img src="https://i.imgur.com/BNM27qD.png" />
//                 <strong>Prep Time: </strong> {props.prepTime}
//               </div>
//               <div className="cookTime">
//                 <img src="https://i.imgur.com/BNM27qD.png" />
//                 <strong>Cook Time: </strong> {props.cookTime}
//               </div>
//               <ul onClick={() => props.listItemClick()}>{props.listName}</ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default QuickViewCard;
