import React from 'react'
import './Button.css'

export default function Button(props) {

    const myStyle = {
        backgroundColor: props.background_color,
        color: props.color,
        padding: props.padding,
        border: props.border,
        borderRadius: props.borderRadius,
    };
    return (
        <button style={myStyle} className='button' onClick={props.onClick}>
            {props.Text}
        </button>
    )
}

Button.defaultProps = {
    Text: `Text`,
}