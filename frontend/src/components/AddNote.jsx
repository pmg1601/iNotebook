import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

/* -------------------------------------------------------------------------- */

const AddNote = () => {
    const intialNoteState = { title: '', desc: '', tag: '' }

    const { addNote } = useContext(noteContext)
    const [note, setNote] = useState(intialNoteState)

    const handleAddNote = (e) => {
        e.preventDefault()
        addNote(note)
    }

    const handleClearNote = (e) => {
        e.preventDefault()
        setNote(intialNoteState)
    }

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    /* -------------------------------------------------------------------------- */

    return (
        <div className='cotaniner my-4'>
            <h1>Add a Note!</h1>

            <form>
                <div className='row'>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='title' className='form-label'>
                            Title
                        </label>
                        <input
                            onChange={handleChange}
                            type='text'
                            className='form-control'
                            id='title'
                            name='title'
                            placeholder='Enter Title...'
                            value={note.title}
                            aria-describedby='emailHelp'
                        />
                    </div>
                    <div className='mb-3 col-md-6'>
                        <label htmlFor='tag' className='form-label'>
                            Tag
                        </label>
                        <input
                            onChange={handleChange}
                            type='text'
                            className='form-control'
                            id='tag'
                            name='tag'
                            placeholder='Give a Tag...'
                            value={note.tag}
                            aria-describedby='emailHelp'
                        />
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='desc' className='form-label'>
                        Description
                    </label>
                    <input
                        onChange={handleChange}
                        type='text'
                        className='form-control'
                        id='desc'
                        name='desc'
                        value={note.desc}
                        placeholder='Describe your note...'
                    />
                </div>

                <button
                    onClick={handleAddNote}
                    type='submit'
                    className='btn btn-dark'>
                    Add note
                </button>
                <button
                    onClick={handleClearNote}
                    type='submit'
                    className='btn btn-dark mx-3'>
                    Clear Form
                </button>
            </form>
        </div>
    )
}

export default AddNote
