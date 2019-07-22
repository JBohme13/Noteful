import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
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
            <div key={i} className='folder' id='selected'>
                <Link 
                  className='folder-link' 
                  to={`/folders/${folder.id}`}
                  onClick={() => value.setFolderId(folder.id)}
                >
                  {folder.name}
                </Link>
            </div> : '')
        return(
            <div className='sidebar-container'>
                <button className='back-button'>
                    <Link to={'/'}>Go Back</Link>
                </button>
                <div>
                { selectedFolder }
                </div>
            </div>
        )
    }
}