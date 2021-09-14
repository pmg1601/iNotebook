import React, { useContext, useEffect, useRef, useState } from 'react'

import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
// import EditNote from './EditNote'

/* -------------------------------------------------------------------------- */

const Notes = () => {
    const intialNoteState = { id: '', title: '', desc: '', tag: 'default' }
    const [note, setNote] = useState(intialNoteState)
    const { notes, getNotes, editNote } = useContext(noteContext)

    const ref = useRef(null)
    const refClose = useRef(null)

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote(currentNote)
    }

    const handleEditNote = (e) => {
        refClose.current.click()
        editNote(note)
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
                                ref={refClose}
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
                                            id='title'
                                            name='title'
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
                                            id='tag'
                                            name='tag'
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
                                    <textarea
                                        onChange={handleChange}
                                        style={{ resize: 'none' }}
                                        type='text'
                                        rows={6}
                                        className='form-control'
                                        id='desc'
                                        name='desc'
                                        value={note.desc}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className='modal-footer'>
                            <button
                                onClick={handleEditNote}
                                disabled={
                                    note.title.length < 5 ||
                                    note.desc.length < 5
                                }
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
