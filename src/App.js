import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import MainMain from './MainMain'
import MainSidebar from './MainSidebar'
import FolderMain from './FolderMain'
import FolderSidebar from './FolderSidebar'
import NoteMain from './NoteMain'
import NoteSidebar from './NoteSidebar'
import dummyStore from './dummy-store'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    const data = dummyStore;
    this.state = {
      folders: data.folders,
      notes: data.notes
    }
  }
  render() {
    return(
      <div className='app-container'>
        
          <Route
            exact path={'/'}
            render={() =>
              <div className='route-container'>
                <Header />
                <MainMain
                  notes={this.state.notes}
                />
                <MainSidebar
                  folders={this.state.folders}
                />
              </div>}
          />
          <Route
            path={'/folders/:folderId'}
            render={(routeProps) => {
              const folderId = routeProps.match.params.folderId;
              const noteId = routeProps.match.params.id;
              return(
              <div className='route-container'>
                <Header />
                <FolderMain 
                  noteId={noteId}
                  folderId={folderId}
                  folders={this.state.folders}
                  notes={this.state.notes}
                />
                <FolderSidebar
                  folders={this.state.folders}
                  folderId={folderId}
                />
              </div>
              )
            }}
          />
          <Route
            path={'/notes/:noteId'}
            render={(routeProps) => {
              const folderId = routeProps.match.params.folderId
              const noteId = routeProps.match.params.noteId;
              return(
              <div className='route-container'>
                <Header />
                <NoteMain
                  notes={this.state.notes}
                  noteId={noteId}
                />
                <NoteSidebar
                  folders={this.state.folders}
                  folderId={folderId} 
                />
              </div>
              )
            }}
          />
      </div>
    )
  }
}