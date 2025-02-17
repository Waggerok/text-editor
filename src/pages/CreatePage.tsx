import * as React from 'react';

const CreatePage : React.FC = () => {
    return (
        <div className='App'>
            <section className="creating">
                <div className="creating__title">
                    <input 
                        type="text"
                        placeholder='Название заметки'
                    />
                </div>
                <div className="creating__textarea" contentEditable></div>
                <div className="creating__button">
                    <button>Добавить заметку</button>
                </div>
            </section>
        </div>
    )
}

export default CreatePage;