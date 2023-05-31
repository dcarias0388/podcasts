import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// styles
import {GridContainer, GridCard, TextContainer} from './GroupPodcasts.styles';

const GroupPodcasts = ({podcasts}) => {
  return (
    <GridContainer>
    {podcasts?.length > 0 ? (
      podcasts?.map((pod) => (
          <GridCard>
            <Link key={pod.id} to={`/podcast/${pod.id}`} state= {{ podcast: pod }}>
              <img src={pod.image} alt={pod.title} />
              <TextContainer>
                <h3>{pod.title}</h3>
                <p>Author: {pod.author}</p>
              </TextContainer>
              </Link>
            </GridCard>
        ))
    ) : (<h1>No podcasts found</h1>)}
        
    </GridContainer>
  )
}

GroupPodcasts.propTypes = {
  podcasts: PropTypes.array,
};

export default GroupPodcasts;
