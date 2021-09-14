import React, { useContext } from 'react'
import Moment from 'react-moment'

import noteContext from '../context/notes/noteContext'

/* -------------------------------------------------------------------------- */

const NoteItem = ({ note, updateNote }) => {
    const { deleteNote } = useContext(noteContext)

    const handleDeleteClick = () => {
        deleteNote(note._id)
    }

    /* -------------------------------------------------------------------------- */

    return (
        <div className='col-md-12 col-xl-6 col-xxl-4'>
            <div className='card my-3'>
                <div className='card-body'>
                    <h5 className='card-title'>{note.title}</h5>
                    <p className='text-muted my-2'>{note.tag}</p>
                    <pre
                        style={{
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'Segoe UI',
                            fontSize: '1rem'
                        }}
                        className='card-text'>
                        {note.desc}
                    </pre>
                    <div className='ms-auto'>
                        <i
                            className='far fa-trash-alt'
                            onClick={handleDeleteClick}></i>
                        <i
                            className='far fa-edit mx-3'
                            onClick={() => {
                                updateNote(note)
                            }}></i>

                        <Moment fromNow date={note.date} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
