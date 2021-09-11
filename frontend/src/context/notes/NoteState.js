import { useState } from 'react'
import noteContext from './noteContext'

const NoteState = (props) => {
    const notesInitial = [
        {
            tag: 'first_note',
            _id: '613623f432895937f06b2b1e',
            title: 'my notes',
            desc: 'Read this for your own salvation',
            user: '61337c5e70a6fc2454e3eaca',
            date: '2021-09-06T14:21:40.912Z',
            __v: 0
        },
        {
            tag: 'first_note',
            _id: '613623f532895937f06b2b20',
            title: 'my notes',
            desc: 'Read this for your own salvation',
            user: '61337c5e70a6fc2454e3eaca',
            date: '2021-09-06T14:21:41.639Z',
            __v: 0
        },
        {
            tag: 'first_note',
            _id: '613623f632895937f06b2b22',
            title: 'my notes',
            desc: 'Read this for your own salvation',
            user: '61337c5e70a6fc2454e3eaca',
            date: '2021-09-06T14:21:42.182Z',
            __v: 0
        },
        {
            tag: 'first_note',
            _id: '613623f632895937f06b2b22',
            title: 'my notes',
            desc: 'Read this for your own salvation',
            user: '61337c5e70a6fc2454e3eaca',
            date: '2021-09-06T14:21:42.182Z',
            __v: 0
        },
        {
            tag: 'first_note',
            _id: '613623f632895937f06b2b22',
            title: 'my notes',
            desc: 'Read this for your own salvation',
            user: '61337c5e70a6fc2454e3eaca',
            date: '2021-09-06T14:21:42.182Z',
            __v: 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = ({ title, desc, tag }) => {
        //TODO: API call

        const note = {
            tag: tag,
            _id: '613623f632895937f06b2b22',
            title: title,
            desc: desc,
            user: '61337c5e70a6fc2454e3eaca',
            date: '2021-09-06T14:21:42.182Z',
            __v: 0
        }
        console.log(note)
        setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id) => {
        // console.log('Deleting note: ', id)

        const newNotes = notes.filter((note) => note._id !== id)
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = () => {}

    /* -------------------------------------------------------------------------- */

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
