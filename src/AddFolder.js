import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import './AddFolder.css'

export default class AddFolder extends Component {
    static contextType = NotefulContext;

    render() {
      const value = this.context;
      return(
          <section id='add-folder-container'>
            <form id='form-container'>
                <h2>Add new folder</h2>
                <section id='form-group'>
                  <label htmlFor='folder-name'>Folder Name</label><br/>
                  <input 
                    type='text'
                    name='folder-name'
                    id='folder-name'
                    required='required'
                    aria-required='true'
                  />
                  <br/>
                  <button 
                    id='folder-submit'
                    type='submit'
                    onClick={event => value.addFolder(event, document.getElementById('folder-name').value)}
                  >
                      Submit
                  </button>
                </section>
            </form>
            <button 
                id='folder-clear'
                onClick={event => value.handleClearButton(event)}
            >
                Clear
            </button>
          </section>
        )
    }
}