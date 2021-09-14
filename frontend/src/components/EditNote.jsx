import React from 'react'

const EditNote = ({ note, setNote, ref }) => {
    // const handleEditNote = (e) => {
    //     e.preventDefault()
    //     // addNote(note)
    //     // setNote(intialNoteState)
    // }

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    /* -------------------------------------------------------------------------- */

    return (
        <>
            <button
                ref={ref}
                type='button'
                className='btn btn-primary d-none'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'>
                Launch demo modal
            </button>

            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                ref={ref}
                aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Edit Note
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'></button>
                        </div>

                        <div className='modal-body'>
                            <form>
                                <div className='row'>
                                    <div className='mb-3 col-md-6'>
                                        <label
                                            htmlFor='title'
                                            className='form-label'>
                                            Title
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            id='etitle'
                                            name='etitle'
                                            value={note.title}
                                            aria-describedby='emailHelp'
                                        />
                                    </div>
                                    <div className='mb-3 col-md-6'>
                                        <label
                                            htmlFor='tag'
                                            className='form-label'>
                                            Tag
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            id='etag'
                                            name='etag'
                                            value={note.tag}
                                            aria-describedby='emailHelp'
                                        />
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label
                                        htmlFor='desc'
                                        className='form-label'>
                                        Description
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type='text'
                                        className='form-control'
                                        id='edesc'
                                        name='edesc'
                                        value={note.desc}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'>
                                Close
                            </button>
                            <button type='button' className='btn btn-primary'>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditNote
