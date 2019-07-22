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
                { folders }
                <button className='addFolder'>Add Folder</button>
            </section> 
        )
    }
}