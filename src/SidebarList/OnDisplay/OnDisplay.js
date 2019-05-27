import React from 'react';
import Store from './dummy-store'
import { withRouter } from 'react-router-dom';

class OnDisplay extends React.Component {
  render() {

    return (
      <div>
        <button onClick={this.props.onGoBack}>Go Back</button>

      </div>
    )
  }
}

export default OnDisplay;