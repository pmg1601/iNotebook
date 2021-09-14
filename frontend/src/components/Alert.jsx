import React from 'react'

const Alert = (props) => {
    // console.log(props)

    return (
        <div style={{ height: '60px' }}>
            {props.alert && (
                <div
                    className={`alert alert-${props.alert.type} shadow`}
                    role='alert'>
                    <div className='container'>{props.alert.msg}</div>
                </div>
            )}
        </div>
    )
}

export default Alert
