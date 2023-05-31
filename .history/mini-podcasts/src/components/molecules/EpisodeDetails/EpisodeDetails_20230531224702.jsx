import React from 'react';
import { useLocation } from "react-router-dom";

// styles
import {Container} from './EpisodeDetails.styles';

const EpisodeDetails = () => {
  const location = useLocation();
  const {episode} = location.state;

  return (
    <Container>
    <h2>{episode.title}</h2>
    <div dangerouslySetInnerHTML={{__html: episode.description,}}/>

    </Container>
  )
}

export default EpisodeDetails;
