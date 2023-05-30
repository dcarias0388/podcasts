import React from 'react';
import PropTypes from 'prop-types';

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

Header.defaultProps = {
  loading: false,
};

Header.propTypes = {
  loading: PropTypes.bool,
};

export default Header;
