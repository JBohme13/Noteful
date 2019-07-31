import React from 'react'

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
    setNoteId: () => {},
    setFolderId: () => {},
    noteId: '',
    folderId: '',
    addNote: () => {},
    addFolder: () => {},
    deleteFolder: () => {},
    handleClearButton: () => {},
    history: {},
    handleNameChange: () => {},
    handleNoteChange: () => {},
    handleFolderNameChange: () => {},
    noteName: {
        value: '',
        touched: false,
    },
    noteBody: {
        value: '',
        touched: false,
    },
    folderName: {
        value: '',
        touched: false,
    },
    validateNameInput: () => {},
    validateNoteInput: () => {},
})

export default NotefulContext;