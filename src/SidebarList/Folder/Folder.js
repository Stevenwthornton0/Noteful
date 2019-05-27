import React from 'react';
import { Link } from 'react-router-dom';


class Folder extends React.Component {
  render() {

    return(
      <Link to={`/folder/${this.props.id}`}
        value={this.props.name} 
        id={this.props.id}
      >
        {this.props.name}
      </Link>
    )
  }
}

export default Folder;