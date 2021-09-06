import React, { useContext } from 'react'

import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const { notes, setNote } = useContext(noteContext)

    return (
        <div className='row my-5'>
            <h1>Your Notes</h1>
            {notes.map((note) => {
                return <NoteItem note={note} />
            })}
        </div>
    )
}

export default Notes
