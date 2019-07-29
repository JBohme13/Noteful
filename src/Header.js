import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return(
          <section className='header-container'>
            <a href={'/'} className='header'>
                Noteful
            </a>
          </section>
        )
    }
}