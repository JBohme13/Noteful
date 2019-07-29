import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from './NotefulContext'
import FolderError from './FolderError'
import DeleteError from './DeleteError'
import './FolderSidebar.css'

export default class folderSidebar extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = NotefulContext;
    render() {
        const value = this.context
        const folderId = this.props.match.folderId;
        const folders = value.folders.map((folder, i) => 
            folder.id === folderId ?
              <div key={i} className='folder' id='selected'>
                <Link 
                  className='folder-link' 
                  to={`/folders/${folder.id}`}
                  onClick={() => value.setFolderId(folder.id)}
                >
                  {folder.name}
                </Link>
              </div> :
              <div key={i} className='folder'>
                <Link 
                  className='folder-link' 
                  to={`/folders/${folder.id}`}
                  onClick={() => value.setFolderId(folder.id)}
                >
                  {folder.name}
                </Link>
              </div>
        )
        return(
            <section className='sidebar-container'>
                <FolderError>
                { folders }
                </FolderError>
                <button 
                  id='add-folder'
                  onClick={() => value.history.push('/add-folder')}
                >
                  Add Folder
                </button>
                <DeleteError>
                  <button 
                    id='delete-folder'
                    onClick={() => value.history.push('/delete-folder')}>
                      Delete Folder
                  </button>
                </DeleteError>
            </section> 
        )
    }
}