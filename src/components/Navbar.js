import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={props.className}>
            <ul>
                <li>{props.navsec1}</li>
                <li>{props.navsec2}</li>
                <li>{props.navsec3}</li>
            </ul>
        </nav>
    )
}

// Navbar.propTypes = {
//     navsec1 : PropTypes.string,
//     navsec2 : PropTypes.string,
//     navsec3 : PropTypes.string
// }

Navbar.defaultProps = {
    navsec1 : 'navsec1',
    navsec2 : 'navsec2',
    navsec3 : 'navsec3'
}