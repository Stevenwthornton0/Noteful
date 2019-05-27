import React from 'react';
import { Route } from 'react-router-dom';
import Notes from './Notes/Notes.js';
import AddNote from './AddNote/AddNote.js';

class NoteList extends React.Component {
  render() {
    const { notes } = this.props

    return(
      <main>
        {notes.map(note =>
          <Notes 
            key={note.id}
            {...note}
          />
        )}
        <AddNote />
      </main>
    )
  }
}

export default NoteList