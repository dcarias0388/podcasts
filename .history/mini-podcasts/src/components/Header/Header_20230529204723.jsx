import React from 'react'

// styles
import {Nav, Loader, Spinner} from './Header.styles';

const Header = ({loading}) => {
  return (
    <Nav>
        <h1>Podcaster</h1>
        {loading && 
        <Loader>
          <Spinner />
        </Loader>
    }
    </Nav>
  )
}

export default Header;
