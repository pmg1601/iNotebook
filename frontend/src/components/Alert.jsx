import React from 'react'

const Alert = (props) => {
    return (
        <div style={{ height: '50px' }}>
            {props.alert && (
                <div
                    className={`alert alert-${props.alert.type} fade show`}
                    role='alert'>
                    <div className='container'>{props.alert.msg}</div>
                </div>
            )}
        </div>
    )
}

export default Alert
