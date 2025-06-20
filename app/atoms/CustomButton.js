import React from 'react'

const CustomButton = (props) => {
    return (
        <button {...props} className={props.className}>
            {props.label}
        </button>
    )
}

export default CustomButton