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
        const value= this.context;
        const folders = value.folders;
        const folderId = value.folderId;
        const selectedFolder = folders.map((folder, i) =>
        folder.id === folderId ? 
            <FolderError>
              <div key={i} className='folder' id='selected'>
                <Link 
                  className='folder-link' 
                  to={`/folders/${folder.id}`}
                  onClick={() => value.setFolderId(folder.id)}
                >
                  {folder.name}
                </Link>
              </div>
            </FolderError> : '')
        return(
            <div className='sidebar-container'>
              <div>
                { selectedFolder }
              </div>
              <button 
                id='back-button'
                onClick={() => value.history.push('/')}
              >
                  Go Back
              </button>
            </div>
        )
    }
}