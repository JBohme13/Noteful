import React, { Component } from 'react';
import Header from './Header'
import MainMain from './MainMain'
import MainSidebar from './MainSidebar'
import FolderMain from './FolderMain'
import FolderSidebar from './FolderSidebar'
import NoteMain from './NoteMain'
import NoteSidebar from './NoteSidebar'
import Main from './Main'
import Sidebar from './Sidebar'
import NotefulContext from './NotefulContext'
import './App.css';

export default class App extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      noteId: null,
      folderId: null,
    }
  }
  //addNote = () => {}

  setNoteId = (value) => {
    this.setState({
      noteId: value,
    })
  }

  setFolderId = (value)  => {
    this.setState({
      folderId: value,
    })
  }
  
  deleteNote = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
      .then(deleteResponse => {
        if(deleteResponse.ok) {
          let updatedNotes = this.state.notes.filter(note => note.id !== noteId )
          this.setState({
            notes: updatedNotes,
          })
        }
      })
    })
  }
  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/folders'),
      fetch('http://localhost:9090/notes')
    ])
      .then(([folderRes, notesRes]) => {
        if(!folderRes.ok) 
          return folderRes.json().then(e => Promise.reject());
        if(!notesRes.ok)
          return notesRes.json().then(e => Promise.reject());
        return Promise.all([folderRes.json(), notesRes.json()])
      })
      .then(([folders, notes]) => {
        console.log(folders);
        console.log(notes);
        this.setState({
          folders: folders,
          notes: notes
        })
      })
      .catch(error => {
        console.error({error})
        })
    }

  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        main: MainMain,
        sidebar: MainSidebar,
      },
      {
        path: `/folders/${this.state.folderId}`,
        exact: false,
        main: FolderMain,
        sidebar: FolderSidebar,      
      },
      {
        path: `/notes/${this.state.noteId}`,
        exact: false,
        main: NoteMain,
        sidebar: NoteSidebar,
      },
    ];
    
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      routes: routes,
      noteId: this.state.noteId,
      folderId: this.state.folderId,
      setNoteId: this.setNoteId,
      setFolderId: this.setFolderId,
    }
    return(
      <NotefulContext.Provider
        value={contextValue}>
        <div className='app-container'>
          <Header />
          <Main />
          <Sidebar />
        </div>
      </NotefulContext.Provider>
    )
  }
}