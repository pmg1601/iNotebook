import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const intialNoteState = { title: '', desc: '', tag: 'default' }

    const { addNote } = useContext(noteContext)
    const [note, setNote] = useState(intialNoteState)

    const handleAddNote = (e) => {
        e.preventDefault()
        addNote(note)
        // setNote(intialNoteState)
    }

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        // console.log(note)
    }

    return (
        <div className='cotaniner mt-2 mb-5'>
            <h1>Add a Note!</h1>

            <form>
                <div className='mb-3'>
                    <label htmlFor='title' className='form-label'>
                        Title
                    </label>
                    <input
                        onChange={handleChange}
                        type='text'
                        className='form-control'
                        id='title'
                        name='title'
                        aria-describedby='emailHelp'
                    />
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
                    />
                </div>
                {/* <div className='mb-3 form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                        />
                        <label
                            className='form-check-label'
                            htmlFor='exampleCheck1'>
                            Check me out
                        </label>
                    </div> */}
                <button
                    onClick={handleAddNote}
                    type='submit'
                    className='btn btn-primary'>
                    Add note
                </button>
            </form>
        </div>
    )
}

export default AddNote
