import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NotefulContext from './NotefulContext'
import './MainSidebar.css'

export default class MainSidebar extends Component {
    static contextType = NotefulContext;
    render() {
        const value = this.context;
        const folders = value.folders.map((folder, i) => 
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