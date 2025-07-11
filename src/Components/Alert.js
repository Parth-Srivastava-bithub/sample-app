import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '100px' }}>
            {(props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <h5><strong>{capitalize(props.alert.type)}</strong></h5>{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>)}
        </div>
    )
}

export default Alert
