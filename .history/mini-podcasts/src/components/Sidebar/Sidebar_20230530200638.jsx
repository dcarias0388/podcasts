import React from 'react';
import PropTypes from 'prop-types';


// styles
import { Container } from './Sidebar.styles';

const Sidebar = ({podcast}) => {
  return (
    <Container>
    <img src={podcast.image} alt={podcast.title} />
    <br/>
    <h3>{podcast.title}</h3>
    <p><em>{`by ${podcast.author}`}</em></p>
    <br/>
    <h3>Description:</h3>
    <p><em>{podcast.summary}</em></p>
    </Container>
  )
}

Sidebar.propTypes = {
    podcast: PropTypes.object,
};

export default Sidebar;
