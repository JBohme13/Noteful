import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import ValidationError from './ValidationError'
import './DeleteFolder.css'

export default class DeleteFolder extends Component {
    static contextType = NotefulContext;

    render() {
      const value = this.context;
      const deleteFolderError = value.deleteFolderError
        return(
          <section id='delete-folder-container'>
            <h2>Delete folder</h2>
            <form id='delete-folder-form'>
                <label htmlFor='select-folder-for-delete'>Select folder</label>
                <select 
                    type='radio'
                    name='select-folder-for-delete'
                    id='select-folder-for-delete'
                    required='required'
                    aria-required='true'
                  >
                      {
                          value.folders.map((folder, i) => {
                            return(
                              <option 
                                key={i}
                                value={folder.id}
                              >
                                  {folder.name}
                              </option>
                            )
                          })
                      }
                  </select>
                  <br />
                  <ValidationError message={deleteFolderError}/>
                  <button
                      id='delete-button' 
                      type='submit'
                      onClick={event => value.deleteFolder(event, document.getElementById('select-folder-for-delete').value)}
                  >
                      Delete
                  </button>
            </form>
            <button
                id='clear-button' 
                onClick={event => value.handleClearButton(event)}
            >
                Clear
            </button>
          </section>
        )
    }
}