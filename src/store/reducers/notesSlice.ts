import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface INote {
    id : number;
    title : string;
    text : string;
}

interface NoteTask {
    notes : INote[]
}

const initialState : NoteTask = { 
    notes : []
}

const notesSlice = createSlice({
    name : 'notes',
    initialState,
    reducers : {
        addTask: (state, action : PayloadAction<{ title : string, text : string }>) => {
            const newNote = {
                id : Date.now(),
                title : action.payload.title,
                text : action.payload.text,
            }
            state.notes.push(newNote);
        },
        deleteTask: (state , action : PayloadAction<number>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload)
        },
    }
})

export const { addTask, deleteTask } = notesSlice.actions;
export default notesSlice.reducer;