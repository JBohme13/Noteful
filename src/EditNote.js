import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import './EditNote.css'

export default class EditNote extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = NotefulContext;

    render() {
        const value = this.context;
        const noteId = value.noteId;
        const notes = value.notes;
        const noteToEdit = notes.map((note, i) => 
            note.id === noteId ?
            <section 
                key={i}
                id='edit-note-container'
            >
                <h2>{note.name}</h2>
                <form
                    id='form-container'
                    onSubmit={event => value.handleUpdateNote(event)}
                >
                    <label htmlFor='edit-note-body'>Edit Note</label>
                    <textarea
                        id='edit-note-body'
                        aria-required='true'
                        defaultValue={note.content}
                    >
                    </textarea>
                    <button 
                    id='edit-note-submit'
                    type='submit'
                    onClick={event => {
                        return value.updateNote(event, document.getElementById('edit-note-body').value)}
                    }
                  >
                      Submit
                  </button>
                  <button 
                    id='edit-note-clear'
                    type='reset'
                    onClick={event => value.handleClearButton(event)}
                    >
                      Clear
                    </button>
                </form>
            </section>
          : '')
        return(
            <section className='main-container'>
                { noteToEdit }
            </section>
        )
    }
};