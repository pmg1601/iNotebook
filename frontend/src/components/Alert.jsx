import React from 'react'

const Alert = (props) => {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '0',
                left: '15px'
            }}>
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
