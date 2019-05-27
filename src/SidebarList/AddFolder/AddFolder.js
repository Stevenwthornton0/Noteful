import React from 'react';
import { Link } from 'react-router-dom';

class AddFolder extends React.Component {
  render() {
    return(
      <Link to='/addfolder'>
        Add Folder
      </Link>
    )
  }
}

export default AddFolder;