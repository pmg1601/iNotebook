import { useState } from 'react'
import noteContext from './noteContext'

/* -------------------------------------------------------------------------- */

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const [alert, setAlert] = useState(null)
    const [notes, setNotes] = useState([])

    /* ------------------------------- Show Alerts ------------------------------ */
    const showAlert = (msg, type = 'warning') => {
        setAlert({ msg, type })
        setTimeout(() => setAlert(null), 3000)
    }

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

            const { savedNote } = await response.json()
            setNotes(notes.concat(savedNote))
        } catch (err) {
            console.error(err)
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

            // const json = response.json()
        } catch (err) {
            console.error(err)
        }
    }

    /* ------------------------------ Edit a note ------------------------------ */
    const editNote = async (id, title, desc, tag) => {
        // API call
        const url = `${host}/api/notes/updatenote/613c4436be0b272c289515ed`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMzdjNWU3MGE2ZmMyNDU0ZTNlYWNhIn0sImlhdCI6MTYzMDc3NTI3Mn0.Qk981QmxW3CmxTwRmXC9ntxqDAZoT_cwLCrLrF5mnAw'
            },
            body: JSON.stringify({ title, desc, tag })
        })

        const json = await response.json()

        // Edit note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index]

            if (element._id === id) {
                element.title = title
                element.desc = desc
                element.tag = tag
            }
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
                getNotes,
                alert,
                showAlert
            }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
