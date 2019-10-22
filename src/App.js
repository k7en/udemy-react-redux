import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {
      name: "taro",
      age: 10
    },
    {
      name: "Kenichi",
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
