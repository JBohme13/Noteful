import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from './NotefulContext'
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
        const folderId = value.folderId;
        const folders = value.folders.map((folder, i) => 
            folder.id === folderId ?
              <section key={i} className='folder' id='current-folder'>
                <Link 
                  className='folder-link' 
                  to={`/folders/${folder.id}`}
                  onClick={() => value.setFolderId(folder.id)}
                >
                  {folder.name}
                </Link>
              </section> :
              <section key={i} className='folder'>
                <Link 
                  className='folder-link' 
                  to={`/folders/${folder.id}`}
                  onClick={() => value.setFolderId(folder.id)}
                >
                  {folder.name}
                </Link>
              </section>
        )
        return(
            <section className='sidebar-container'>
                { folders }
                <button 
                  id='add-folder'
                  onClick={() => value.history.push('/add-folder')}
                >
                  Add Folder
                </button>
                  <button 
                    id='delete-folder'
                    onClick={() => value.history.push('/delete-folder')}>
                      Delete Folder
                  </button>
            </section> 
        )
    }
}