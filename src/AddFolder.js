import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import ValidationError from './ValidationError'
import './AddFolder.css'

export default class AddFolder extends Component {
    static contextType = NotefulContext;

    validateFolderNameInput = () => {
      const name = this.context.folderName.value.trim();
      if ( name.length === 0) {
        return 'Name is required'
      } else if (name.length <= 2) {
        return 'Folder name must be at least three characters'
      }
    };

    render() {
      const value = this.context;
      const nameError = this.validateFolderNameInput();
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
                    onChange={event => value.handleFolderNameChange(event.target.value)}
                  />
                  {value.folderName.touched && <ValidationError message={nameError} />}
                  <br/>
                  <button 
                    id='folder-submit'
                    type='submit'
                    disabled = {
                      nameError
                    }
                    onClick={event => value.addFolder(event)}
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