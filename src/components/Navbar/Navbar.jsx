import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { FaGripLines } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`navbar ${props.className}`}>
      <div id='logo'>{props.logo}</div>
      <button className='navbar-toggle' onClick={handleToggle}>
        {isOpen ? <FaGripLines /> : <FaBars />}       
        
      </button>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li className='navbar-item'>{props.navsec1}</li>
        <li className='navbar-item'>{props.navsec2}</li>
        <li className='navbar-item'>{props.navsec3}</li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  navsec1: PropTypes.string,
  navsec2: PropTypes.string,
  navsec3: PropTypes.string,
};

Navbar.defaultProps = {
  logo: `Logo`,
  navsec1: 'navsec1',
  navsec2: 'navsec2',
  navsec3: 'navsec3',
};
