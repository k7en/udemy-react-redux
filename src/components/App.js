import React, {Component} from 'react';
import  { connect } from 'react-redux'
import { increment, decrement } from '../actions'

// const App = () => (<Counter></Counter>)

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { count: 0}
  // }

  // handlePlusButton = () => {
  //   this.setState({count: this.state.count +1})
  // }
  // handleMinButton = () => {
  //   this.setState({count: this.state.count -1})
  // }
  
  render(){
    const props = this.props
    return(
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
      )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapispatchToProps)(App)
// export default App;
