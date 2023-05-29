import React from 'react'

// styles
import {Nav, Spinner} from './Header.styles';

const Header = () => {
  return (
    <Nav>
        <h1>Podcaster</h1>
        <Spinner />
    </Nav>
  )
}

export default Header;
