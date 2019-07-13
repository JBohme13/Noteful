import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './MainSidebar.css'

export default class MainSidebar extends Component {
    render() {
        const folders = this.props.folders.map((folder, i) => 
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