import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

const Home = () => {
    return (
        <div>
            <AddNote />
            <hr />
            <Notes />
        </div>
    )
}

export default Home
