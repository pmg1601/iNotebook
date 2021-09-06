import React from 'react'

const NoteItem = ({ note }) => {
    // const {} =
    return (
        <div className='col-md-3'>
            <div class='card my-3'>
                <div class='card-body'>
                    <h5 class='card-title'>{note.title}</h5>
                    <p class='card-text'>
                        {note.desc} Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Corporis sapiente quos veritatis
                        obcaecati?{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
