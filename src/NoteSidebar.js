import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import FolderError from './FolderError'
import './NoteSidebar.css'

export default class NoteSidebar extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = NotefulContext;
    render() {
        const value = this.context;
        const folderId = value.folderId;
        const folders = value.folders;
        const selectedFolder = folders.map((folder, i) =>
        folder.id === folderId ? 
              <section key={i} className='note-folder'>
                <Link 
                  className='folder-link' 
                  to={`/folders/${folder.id}`}
                  onClick={() => value.setFolderId(folder.id)}
                >
                  {folder.name}
                </Link>
              </section> : '');
        return(
            <section className='sidebar-container'>
              <FolderError>
                { selectedFolder }
              </FolderError>
              <button 
                id='back-button'
                onClick={() => value.history.push('/')}
              >
                  Go Back
              </button>
            </section>
        )
    }
}