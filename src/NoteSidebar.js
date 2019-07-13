import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NoteSidebar.css'

export default class NoteSidebar extends Component {
    render() {
        const folders = this.props.folders;
        const folderId = this.props.folderId;
        const selectedFolder = folders.map((folder, i) =>
        folder.id === folderId ? 
            <div key={i} className='folder' id='selected'>
                <Link className='folder-link' to={`/folders/${folder.id}`}>{folder.name}</Link>
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