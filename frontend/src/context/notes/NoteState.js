import noteContext from './noteContext'

const NoteState = (props) => {
    return (
        <noteContext.Provider value={{ state: 'State', update: 'Update' }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
