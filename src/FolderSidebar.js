import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './FolderSidebar.css'

export default class folderSidebar extends Component {
    render() {
        const folderId = this.props.folderId;
        const folders = this.props.folders.map((folder, i) => 
            folder.id === folderId ?
            <div key={i} className='folder' id='selected'>
                <Link className='folder-link' to={`/folders/${folder.id}`}>{folder.name}</Link>
            </div> :
            <div key={i} className='folder'>
                <Link className='folder-link' to={`/folders/${folder.id}`}>{folder.name}</Link>
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