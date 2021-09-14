import { useState } from 'react'
import noteContext from './noteContext'

/* -------------------------------------------------------------------------- */

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const [notes, setNotes] = useState([])

    /* ------------------------------ Get all notes ----------------------------- */
    const getNotes = async () => {
        try {
            const url = `${host}/api/notes/all`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdjNWU3MGE2ZmMyNDU0ZTNlYWNhIn0sImlhdCI6MTYzMDc3NTI3Mn0.Qk981QmxW3CmxTwRmXC9ntxqDAZoT_cwLCrLrF5mnAw'
                }
            })
            const json = await response.json()
            setNotes(json)
        } catch (err) {
            console.error(err)
        }
    }

    /* ------------------------------- Add a note ------------------------------- */
    const addNote = async ({ title, desc, tag }) => {
        try {
            const url = `${host}/api/notes/addnote`
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdjNWU3MGE2ZmMyNDU0ZTNlYWNhIn0sImlhdCI6MTYzMDc3NTI3Mn0.Qk981QmxW3CmxTwRmXC9ntxqDAZoT_cwLCrLrF5mnAw'
                },
                body: JSON.stringify({ title, desc, tag })
            })

            const res = await response.json()
            if (!res.errors) {
                setNotes(notes.concat(res.savedNote))
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    /* ------------------------------ Delete a note ----------------------------- */
    const deleteNote = async (id) => {
        try {
            const newNotes = notes.filter((note) => note._id !== id)
            setNotes(newNotes)

            const url = `${host}/api/notes/deletenote/${id}`
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdjNWU3MGE2ZmMyNDU0ZTNlYWNhIn0sImlhdCI6MTYzMDc3NTI3Mn0.Qk981QmxW3CmxTwRmXC9ntxqDAZoT_cwLCrLrF5mnAw'
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    /* ------------------------------ Edit a note ------------------------------ */
    const editNote = async (note) => {
        const { _id, title, desc, tag } = note
        const url = `${host}/api/notes/updatenote/${_id}`
        console.log(note)

        try {
            // API call
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdjNWU3MGE2ZmMyNDU0ZTNlYWNhIn0sImlhdCI6MTYzMDc3NTI3Mn0.Qk981QmxW3CmxTwRmXC9ntxqDAZoT_cwLCrLrF5mnAw'
                },
                body: JSON.stringify({ title, desc, tag })
            })

            // const json = await response.json()
            await response.json()

            // Edit note
            let newNotes = JSON.parse(JSON.stringify(notes))

            for (let index = 0; index < newNotes.length; index++) {
                const element = newNotes[index]

                if (element._id === _id) {
                    newNotes[index].title = title
                    newNotes[index].desc = desc
                    newNotes[index].tag = tag

                    break
                }
            }
            setNotes(newNotes)
        } catch (err) {
            console.error(err)
        }
    }

    /* -------------------------------------------------------------------------- */

    return (
        <noteContext.Provider
            value={{
                notes,
                addNote,
                deleteNote,
                editNote,
                getNotes
            }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
