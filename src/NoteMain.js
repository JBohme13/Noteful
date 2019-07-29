import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import DeleteError from './DeleteError'
import './NoteMain.css'

export default class NoteMain extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = NotefulContext;
  render() {
      const value = this.context;
      const noteId = value.noteId;
      const notes = value.notes;
      const selectedNote = notes.map((note, i) => 
        note.id === noteId ?
        <div key={i}>
          <section className='notes-main'>
            <h2>{note.name}</h2>
            <span>Date modified: {new Date(note.modified).toLocaleString()}</span>
          </section>
          <p className='note-content'>{note.content}</p>
          <button 
            id='delete-button'
            onClick={e => value.deleteNote(note.id)}
          >
            Delete
          </button>
        </div> : '');
      return(
          <div className='main-container'>
            { selectedNote }
          </div>
      )
  }
}