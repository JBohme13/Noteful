import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import NoteError from './noteError'
import './MainMain.css'

export default class MainMain extends Component{
    static contextType = NotefulContext;
    render() {
        const value = this.context;
        const notes = value.notes.map((note, i) => 
              <section id='notes-main' key={i}>
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
                <span id='note-modified'>{new Date(note.modified).toLocaleString()}</span>
                  <button 
                    id='delete-button'
                    onClick={e => value.deleteNote(note.id)}
                  >
                    Delete
                  </button>
              </section>
        )
        return(
            <section className='main-container'>
              <NoteError>
                { notes }
              </NoteError>
              <button 
                id='add-note-container'
                onClick ={() => value.history.push('/add-note')}>
                <a 
                  href={'/add-note'}
                  id='add-note'
                >
                  Add Note
                </a>
              </button>
            </section>
        )
    }
}