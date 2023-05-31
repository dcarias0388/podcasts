import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";

// styles
import { Container, Divider } from './Sidebar.styles';

const Sidebar = ({podcast}) => {
  const { podcastId } = useParams();

  return (
    <Container>
        <Link to={`/podcast/${podcastId}`} state= {{ podcast: podcast }}>
          <img src={podcast.image} alt={podcast.title} />
        </Link>
        <Divider />
        <Link to={`/podcast/${podcastId}`} state= {{ podcast: podcast }}>
          <h3>{podcast.title}</h3>
        </Link>
        <p><em>{`by ${podcast.author}`}</em></p>
        <Divider />
        <h3>Description:</h3>
        <p><em>{podcast.summary}</em></p>
    </Container>
  )
}

Sidebar.propTypes = {
    podcast: PropTypes.object,
};

export default Sidebar;
