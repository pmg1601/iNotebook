import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

const Home = () => {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <AddNote />
            </div>
            <div className='col-md-6'>
                <Notes />
            </div>
        </div>
    )
}

export default Home
