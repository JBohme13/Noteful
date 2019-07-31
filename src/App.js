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
import AddNote from './AddNote'
import AddFolder from './AddFolder'
import DeleteFolder from './DeleteFolder'
import NotefulContext from './NotefulContext'
import { withRouter } from 'react-router-dom'
import './App.css';

class App extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      noteId: null,
      folderId: null,
      error: '',
      noteName: {
        value: '',
        touched: false,
      },
      noteBody: {
        value: '',
        touched: false,
      },
    }
  }

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

  addNote = (event, folder) => {
    event.preventDefault();
    const uuidv4 = require('uuid/v4');
    const data = {
      id: uuidv4(),
      name: this.state.noteName.value,
      content: this.state.noteBody.value,
      folderId: folder,
      modified: new Date()
    };
    fetch('http://localhost:9090/notes/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(addResponse => {
      if(addResponse.ok) {
        return addResponse.json();
      } else{
        throw new Error('Something went wrong, note not added')
      }
    })
    .then(addResponseJson => {
      let updateNotes = this.state.notes;
      updateNotes.push(addResponseJson);
      this.setState({
        notes: updateNotes,
        error: '',
      })
      this.props.history.push('/');
    })
    .catch(error => this.setState({error: error.message}))
  }

  addFolder = (event) => {
    event.preventDefault();
    const uuidv4 = require('uuid/v4');
    const data = {
      id: uuidv4(),
      name: this.state.noteName.value,
    };
    fetch('http://localhost:9090/folders/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(addResponse => {
      if(addResponse.ok) {
        return addResponse.json();
      } else {
        throw new Error('Something went wrong, Folder not added')
      }
    })
    .then(addResponseJson => {
      let updateFolders = this.state.folders;
      updateFolders.push(addResponseJson);
      this.setState({
        folders: updateFolders,
        error: '',
      });
      this.props.history.push('/');
    })
    .catch(error => this.setState({error: error.message}))
  }
  
  deleteNote = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(deleteResponse => {
      if(deleteResponse.ok) {
        let updatedNotes = this.state.notes.filter(note => note.id !== noteId )
        this.setState({
          notes: updatedNotes,
          error: '',
        })
        this.props.history.push('/');
      }else {
        throw new Error('Something went wrong, note was not deleted')
      }
    })
    .catch(error => this.setState({error: error.message}))
  }

  deleteFolder = (event, folderId) => {
    event.preventDefault();
    fetch(`http://localhost:9090/folders/${folderId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(deleteResponse => {
      if(deleteResponse.ok) {
        let updatedFolders = this.state.folders.filter(folder => folder.id !== folderId)
        this.setState({
          folders: updatedFolders,
          error: '',
        });
        this.props.history.push('/');
      } else {
        throw new Error('Something went wrong, folder was not deleted')
      }
    })
    .catch(error => this.setState({error: error.message}))
  } 

  handleClearButton = (event) => {
    this.props.history.push('/')
  }

  handleNameChange = name => {
    this.setState({
      noteName: {
        value: name,
        touched: true,
      }
    })
  }

  handleNoteChange = note => {
    this.setState({
      noteBody: {
        value: note,
        touched: true,
      }
    })
  }

  validateNameInput = () => {
    const name = this.state.noteName.value.trim();
    if (name.length < 3) {
      return 'Note name must be at least three characters'
    }
  };

  validateNoteInput = () => {
    const body = this.state.noteBody.value.trim();
    if (body.length > 1) {
      return 'Note body must not be empty'
    }
  };

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
      .then(value => {
        console.log(value)
        this.setState({
          folders: value[0],
          notes: value[1],
          error: ''
        })
      })
      .catch(error => {
        this.setState({
          error: `Something went Wrong, ${error.message}`
        })
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
      {
        path: '/add-note',
        exact: false,
        main: AddNote
      },
      {
        path: '/add-folder',
        exact: false,
        main: AddFolder
      },
      {
        path: '/delete-folder',
        exact: false,
        main: DeleteFolder
      }
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
      addNote: this.addNote,
      addFolder: this.addFolder,
      deleteFolder: this.deleteFolder,
      handleClearButton: this.handleClearButton,
      history: this.props.history,
      handleNameChange: this.handleNameChange,
      handleNoteChange: this.handleNoteChange,
      noteName: {
        value: this.state.noteName.value,
        touched: this.state.noteName.touched,
      },
      noteBody: {
        value: this.state.noteBody.value,
        touched: this.state.noteBody.touched,
      },
      validateNameInput: this.validateNameInput,
      validateNoteInput: this.validateNoteInput,
    }
    return(
      <NotefulContext.Provider
        value={contextValue}>
        <main id='app-container'>
          <Header />
          <Main />
          <Sidebar />
          <section id='error-container'>
            {this.state.error}
          </section>
        </main>
      </NotefulContext.Provider>
    )
  }
}

export default withRouter(App)
