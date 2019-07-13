import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FolderMain.css'

export default class FolderMain extends Component {
    render() {
        const notes = this.props.notes;
        const folderId = this.props.folderId;
        const notesInFolder = notes.map((note, i) => 
            note.folderId === folderId ? 
          <section className='folders-main' key={i}>
            <Link to={`/notes/${note.id}`}>{note.name}</Link>
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