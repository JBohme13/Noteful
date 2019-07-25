import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return(
          <div className='header-container'>
            <a href={'/'} className='header'>
                Noteful
            </a>
          </div>
        )
    }
}