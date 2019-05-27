import React from 'react';
import { Route, Link } from 'react-router-dom';

class Notes extends React.Component {
  render() {
    const date = this.props.modified.split('T')

    return(
      <section>
        <ul>
          <li>    
            <Link to={`/note/${this.props.id}`}><h2>{this.props.name}</h2></Link>
            <p>Date Modified: {date[0]}</p>
            <button>Delete</button>
          </li>
        </ul>
      </section>
    )
  }
}

export default Notes;