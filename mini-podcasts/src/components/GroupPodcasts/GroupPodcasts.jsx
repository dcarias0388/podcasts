import React from 'react';
import PropTypes from 'prop-types';

// styles
import {GridContainer, GridCard, TextContainer} from './GroupPodcasts.styles';

const GroupPodcasts = ({podcasts}) => {
  return (
    <GridContainer>
        {podcasts?.map((pod) => (
          <GridCard key={pod.id}>
             <img src={pod.image} alt={pod.title} />
             <TextContainer>
             <h3>{pod.title}</h3>
             <p>Author: {pod.author}</p>
             </TextContainer>
          </GridCard>
        ))}
    </GridContainer>
  )
}

GroupPodcasts.propTypes = {
  podcasts: PropTypes.array,
};

export default GroupPodcasts;
