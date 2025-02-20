import { configureStore } from "@reduxjs/toolkit";
import notesSlice from './reducers/notesSlice'

export const store = configureStore({
    reducer : {
        notes : notesSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;