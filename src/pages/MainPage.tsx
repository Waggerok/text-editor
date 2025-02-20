import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MainPage : React.FC = ()  => {

    const notes = useSelector(( state : RootState) => state.notes.notes)

    return (
        <div>
            {notes.map((note) => (
                <li key={note.id}>
                    {note.title}
                    {note.text}
                </li>
            ))}
        </div>
    )
}

export default MainPage;