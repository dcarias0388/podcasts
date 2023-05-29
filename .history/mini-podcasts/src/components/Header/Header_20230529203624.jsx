import React from 'react'

// styles
import {Nav, Loader, Spinner} from './Header.styles';

const Header = () => {
  return (
    <Nav>
        <h1>Podcaster</h1>
        <Loader>
          <Spinner />
        </Loader>
    </Nav>
  )
}

export default Header;
