import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import FolderError from './FolderError'
import DeleteError from './DeleteError'
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
            <section id='folders-main' key={i}>
              <Link 
                id='note-link'
                to={`/notes/${note.id}`}
                onClick={() => value.setNoteId(note.id)}
              >
                {note.name}
              </Link>
              <span id='note-modified'>{new Date(note.modified).toLocaleString()}</span>
                <DeleteError>
                  <button 
                    id='delete-button'
                    onClick={e => value.deleteNote(note.id)}
                  >
                    Delete
                  </button>
                </DeleteError>
            </section> : '');
        return(
          <div className='main-container'>
            <FolderError>
              {notesInFolder}
            </FolderError>
          </div>
        )
    }
}