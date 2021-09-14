import React, { useContext, useEffect, useRef, useState } from 'react'

import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
// import EditNote from './EditNote'

/* -------------------------------------------------------------------------- */

const Notes = () => {
    const intialNoteState = { title: '', desc: '', tag: 'default' }
    const [note, setNote] = useState(intialNoteState)
    const { notes, getNotes } = useContext(noteContext)

    const ref = useRef(null)

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote(currentNote)
    }

    const handleEditNote = (e) => {
        e.preventDefault()
        // addNote(note)
        // setNote(intialNoteState)
    }

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    /* -------------------------------------------------------------------------- */

    return (
        <>
            <button
                ref={ref}
                type='button'
                className='btn btn-primary d-none'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'>
                Launch demo modal
            </button>
            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Edit Note
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'></button>
                        </div>

                        <div className='modal-body'>
                            <form>
                                <div className='row'>
                                    <div className='mb-3 col-md-6'>
                                        <label
                                            htmlFor='title'
                                            className='form-label'>
                                            Title
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            id='etitle'
                                            name='etitle'
                                            value={note.title}
                                            aria-describedby='emailHelp'
                                        />
                                    </div>
                                    <div className='mb-3 col-md-6'>
                                        <label
                                            htmlFor='tag'
                                            className='form-label'>
                                            Tag
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            id='etag'
                                            name='etag'
                                            value={note.tag}
                                            aria-describedby='emailHelp'
                                        />
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='desc'
                                        className='form-label'>
                                        Description
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type='text'
                                        className='form-control'
                                        id='edesc'
                                        name='edesc'
                                        value={note.desc}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'>
                                Close
                            </button>
                            <button
                                onClick={handleEditNote}
                                type='button'
                                className='btn btn-primary'>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-4'>
                <h1>Your Notes</h1>
                {notes.length !== 0 ? (
                    notes.map((note, i) => {
                        return (
                            <NoteItem
                                key={i}
                                updateNote={updateNote}
                                note={note}
                            />
                        )
                    })
                ) : (
                    <h3 style={{ color: 'gray', marginBlock: '2rem' }}>
                        &ldquo; No Notes Added! &rdquo;
                    </h3>
                )}
            </div>
        </>
    )
}

export default Notes
