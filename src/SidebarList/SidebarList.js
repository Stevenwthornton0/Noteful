import React from 'react';
import { Route } from 'react-router-dom';
import Folder from './Folder/Folder.js';
import AddFolder from './AddFolder/AddFolder.js';
import OnDisplay from './OnDisplay/OnDisplay.js';

class SidebarList extends React.Component {
  render() {
    const folders = this.props.folders.map(
      folder => (
        <Folder 
          id={folder.id}
          name={folder.name}
        />
      )
    )
        console.log(folders);
    return(
      <aside>
        <Route
          exact path='/'
          render={() => folders}/>
        <Route
          exact path='/'
          component={AddFolder}/>

        
        <Route
          path='/note'
          render={({ history }) => (
            <OnDisplay
            onGoBack={() => history.goBack()}
            folders={this.props.folders}
            notes={this.props.notes}/>
          )}
        />    
      </aside>
    )
  }
}

export default SidebarList