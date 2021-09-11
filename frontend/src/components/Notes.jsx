import React, { useContext } from 'react'

import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const { notes } = useContext(noteContext)

    return (
        <div className='row my-4'>
            <h1>Your Notes</h1>
            {notes.length !== 0 ? (
                notes.map((note, i) => {
                    return <NoteItem key={i} note={note} />
                })
            ) : (
                <h3 style={{ color: 'gray', marginBlock: '2rem' }}>
                    &ldquo; No Notes Added! &rdquo;
                </h3>
            )}
        </div>
    )
}

export default Notes
