import React from 'react';
import PropTypes from 'prop-types';


// styles
import { Container } from './Sidebar.styles';

const Sidebar = ({podcast}) => {
  return (
    <Container>Sidebar</Container>
  )
}

Sidebar.propTypes = {
    podcast: PropTypes.object,
};

export default Sidebar;
