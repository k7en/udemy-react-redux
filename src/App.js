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
  const profiles = [
    {
      name: "taro",
      age: 10
    },
    {
      name: "kenichi",
      age: 43
    },
    {
      name: "noname",
    }
  ]
  return(
    <div>
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, {props.age} years old! </div>
}

User.defaultProps = {
  age : 1
}
export default App;
