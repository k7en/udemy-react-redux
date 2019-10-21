import React, {Component} from 'react';

// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am Clicked")}} />      
//       </React.Fragment>
//     )  
//   }
// }

const App = () => {
  return(
    <div>
      <Cat />{hoge}
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const hoge = "hogehoge"
const Cat = () =>{
  return <div>Meow!</div>
}
export default App;
