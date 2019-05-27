import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList/NoteList.js';
import SidebarList from './SidebarList/SidebarList.js';
import Store from './dummy-store';

class App extends React.Component {
  state = {
    folders: Store.folders,
    notes: Store.notes
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <header>
          <h1>
            <Link to='/'>
              Noteful
            </Link>
          </h1>
        </header>
        <Route
          path='/'
          render={() =>
            <SidebarList
              folders={this.state.folders}
              notes={this.state.notes}/>
          }
        />
        <Route
          exact path='/'
          render={() => 
            <NoteList 
              notes={this.state.notes}/>
          }
        />
      </div>
    )
  }
}

export default App;