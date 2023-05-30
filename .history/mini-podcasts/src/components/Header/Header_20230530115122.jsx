import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// styles
import {Nav, Loader, Spinner} from './Header.styles';

const Header = ({loading}) => {
  return (
    <Nav>
      <Link to='/'>
        <h1>Podcaster</h1>
      </Link>
      {loading && 
        <Loader>
          <Spinner />
        </Loader>
      }
    </Nav>
  )
}

Header.defaultProps = {
  loading: false,
};

Header.propTypes = {
  loading: PropTypes.bool,
};

export default Header;
