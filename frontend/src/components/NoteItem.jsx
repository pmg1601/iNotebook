import React, { useContext } from 'react'

import noteContext from '../context/notes/noteContext'

/* -------------------------------------------------------------------------- */

const NoteItem = ({ note, updateNote }) => {
    const { deleteNote } = useContext(noteContext)

    const handleDeleteClick = () => {
        deleteNote(note._id)
    }

    /* -------------------------------------------------------------------------- */

    return (
        <div className='col-sm-6 col-md-4 col-xl-3'>
            <div className='card my-3'>
                <div className='card-body'>
                    <h5 className='card-title'>{note.title}</h5>
                    <p
                        className='my-2'
                        style={{
                            color: 'gray',
                            borderRadius: '30px'
                        }}>
                        {note.tag}
                    </p>
                    <p className='card-text'>{note.desc}</p>
                    <div className='ms-auto'>
                        <i
                            className='far fa-trash-alt'
                            onClick={handleDeleteClick}></i>
                        <i
                            className='far fa-edit ms-3'
                            onClick={() => {
                                updateNote(note)
                            }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
