import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/reducers/notesSlice';

const CreatePage : React.FC = () => {

    const [title, setTitle] = React.useState('');
    const [text , setText] = React.useState('');

    const dispatch = useDispatch();

    const textChange = (e : React.FormEvent<HTMLDivElement>) => {
        setText(e.currentTarget.innerHTML)
    }

    const addNote = () => {
        if (text.trim() && title.trim()) {
            dispatch(addTask({ text, title }));
            setTitle('');
            setText('');
            console.log('Добавили заметку')
        }
    }

    return (
        <div className='App'>
            <section className="creating">
                <div className="creating__title">
                    <input 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder='Название заметки'
                    />
                </div>
                <div 
                    className="creating__textarea" 
                    contentEditable
                    onInput={textChange}
                    dangerouslySetInnerHTML={{ __html : text }}
                >
                </div>
                
                <div className="creating__button">
                    <button onClick={addNote}>Добавить заметку</button>
                </div>
            </section>
        </div>
    )
}

export default CreatePage;