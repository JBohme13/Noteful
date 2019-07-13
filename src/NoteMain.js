import React, { Component } from 'react'
import './NoteMain.css'

export default class NoteMain extends Component {
  render() {
      const notes = this.props.notes
      const noteId = this.props.noteId
      const selectedNote = notes.map((note, i) => 
        note.id === noteId ?
        <div key={i}>
          <section className='notes-main'>
            <h2>{note.name}</h2>
            <span>Date modified: {new Date(note.modified).toLocaleString()}</span>
          </section>
          <p>{note.content}</p>
        </div> : '');
      return(
          <div className='main-container'>
            { selectedNote }
          </div>
      )
  }
}