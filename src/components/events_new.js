import React, {Component} from 'react';
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { postEvent } from 'react-router-dom'
 
class EventsNew extends Component {

  render(){
    return(
      <React.Fragment>
        <div>events new</div>
      </React.Fragment>
      )
  }
}

// const mapispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew)
// export default App;
