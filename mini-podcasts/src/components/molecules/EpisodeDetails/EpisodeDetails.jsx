import React from 'react';
import { useLocation } from "react-router-dom";

// styles
import {Container, Divider} from './EpisodeDetails.styles';

const EpisodeDetails = () => {
  const location = useLocation();
  const {episode} = location.state;

  return (
    <Container>
    <h2>{episode.title}</h2>
    <div dangerouslySetInnerHTML={{__html: episode.description,}}/>
    <Divider/>
    <audio controls>
        <source src={episode.urlAudio} type="audio/mp3" />
        <source src={episode.urlAudio} type="audio/aac" />
        <source src={episode.urlAudio} type="audio/wav " />
        <source src={episode.urlAudio} type="audio/ogg " />
        <source src={episode.urlAudio} type="audio/webm " />
    Your browser does not support the <code>audio</code> element.
    </audio>
    </Container>
  )
}

export default EpisodeDetails;
