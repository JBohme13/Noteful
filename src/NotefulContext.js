import React from 'react'

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
    routes: [],
    setNoteId: () => {},
    setFolderId: () => {},
    noteId: '',
    folderId: '',
    addNote: () => {},
    addFolder: () => {},
    deleteFolder: () => {},
    handleClearButton: () => {},
    history: {},
})

export default NotefulContext;