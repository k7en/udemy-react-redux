import React, {Component} from 'react';
import  { connect } from 'react-redux'
import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount(){
    console.log("event index component mounted")
    this.props.readEvents()
  }

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

const mapStateToProps = state => ({ })
const mapispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapispatchToProps)(EventsIndex)
// export default App;
