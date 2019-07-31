import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import PropTypes from 'prop-types'
import './MainMain.css'

export default class MainMain extends Component{
    static contextType = NotefulContext;
    render() {
        const value = this.context;
        const renderNotes = value.notes.map((note, i) => {
          return(
              <section className='notes-main' key={i}>
                <Link 
                  to={`/notes/${note.id}`} 
                  id='note-link'
                  onClick={() => {
                    value.setNoteId(note.id);
                    value.setFolderId(note.folderId);
                  }}
                >
                  {note.name}
                </Link>
                <span 
                  className='note-modified'>{new Date(note.modified).toLocaleString()}
                </span>
                  <button 
                    id='delete-button'
                    onClick={e => value.deleteNote(note.id)}
                  >
                    Delete
                  </button>
              </section>
          )}
        )
        return(
            <section className='main-container'>
                { renderNotes }
              <button 
                id='add-note-container'
                onClick ={() => value.history.push('/add-note')}>
                  Add Note
              </button>
            </section>
        )
    }
};

MainMain.propTypes = {
  notes: PropTypes.array,
  setNoteId: PropTypes.func,
  setFolderid: PropTypes.func,
  deleteNotes: PropTypes.func,
};