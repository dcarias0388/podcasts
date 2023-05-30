import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// styles
import {GridContainer, GridCard, TextContainer} from './GroupPodcasts.styles';

const GroupPodcasts = ({podcasts}) => {
  return (
    <GridContainer>
        {podcasts?.map((pod) => (
            <GridCard key={pod.id}>
              <Link to={`/podcast/${pod.id}`} state= {{ podcast: pod }}>
                <img src={pod.image} alt={pod.title} />
                <TextContainer>
                  <h3>{pod.title}</h3>
                  <p>Author: {pod.author}</p>
                </TextContainer>
              </Link>
            </GridCard>
          
        ))}
    </GridContainer>
  )
}

GroupPodcasts.propTypes = {
  podcasts: PropTypes.array,
};

export default GroupPodcasts;
