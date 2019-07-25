import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from './NotefulContext'
import FolderError from './FolderError'
import './MainSidebar.css'

export default class MainSidebar extends Component {
    static contextType = NotefulContext;
    render() {
        const value = this.context;
        const folders = value.folders.map((folder, i) => 
            <div key={i} id='folder'>
                <Link 
                  id='folder-link' 
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
                  onClick={() => value.history.push('/add-folder')}>
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