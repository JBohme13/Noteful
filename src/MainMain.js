import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from './NotefulContext'
import './MainMain.css'

export default class MainMain extends Component{
    static contextType = NotefulContext;
    render() {
        const value = this.context;
        const notes = value.notes.map((note, i) => 
            <section className='notes-main' key={i}>
              <Link 
                to={`/notes/${note.id}`} 
                className='note-link'
                onClick={() => value.setNoteId(note.id)}
              >
                {note.name}
              </Link>
              <span className='note-modified'>{new Date(note.modified).toLocaleString()}</span>
              <button 
                className='delete-button'
                onClick={e => value.deleteNote(note.id)}
              >Delete</button>
            </section>
        )
        return(
            <div className='main-container'>
                { notes }
              <button className='addNote'>Add Note</button>
            </div>
        )
    }
}