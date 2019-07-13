import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './MainMain.css'

export default class MainMain extends Component{
    render() {
        const notes = this.props.notes.map((note, i) => 
            <section className='notes-main' key={i}>
              <Link to={`/notes/${note.id}`} className='note-link'>{note.name}</Link>
              <span className='note-modified'>{new Date(note.modified).toLocaleString()}</span>
              <button className='delete-button'>Delete</button>
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