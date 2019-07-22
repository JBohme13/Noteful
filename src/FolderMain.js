import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import './FolderMain.css'

export default class FolderMain extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = NotefulContext;
    render() {
        const value = this.context;
        const folderId = value.folderId;
        const notes = value.notes;
        const notesInFolder = notes.map((note, i) => 
            note.folderId === folderId ? 
          <section className='folders-main' key={i}>
            <Link 
              to={`/notes/${note.id}`}
              onClick={() => value.setNoteId(note.id)}
            >
              {note.name}
            </Link>
            <span>{new Date(note.modified).toLocaleString()}</span>
            <button className='delete-button'>Delete</button>
          </section> : '');
        return(
          <div className='main-container'>
              {notesInFolder}
          </div>
        )
    }
}