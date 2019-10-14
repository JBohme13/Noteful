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
    updateNote: () => {},
    deleteFolder: () => {},
    handleClearButton: () => {},
    handleEditButton: () => {},
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
    editNoteName: {
        value: '',
        touched: true,
    },
    editNoteBody: {
        value: '',
        touched: true,
    },
    validateNameInput: () => {},
    validateNoteInput: () => {},
    handleEditNameChange: () => {},
    handleEditNoteChange: () => {},
    deleteFolderError: () => {}
})

export default NotefulContext;