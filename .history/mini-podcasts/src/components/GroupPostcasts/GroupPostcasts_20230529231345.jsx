import React from 'react'

// styles
import {GridContainer, GridCard} from './GroupContainer.styles';

const GroupPostcasts = ({postcasts}) => {
  return (
    <GridContainer>
        {postcasts?.map((post) => (
          <GridCard key={post.id}>
             <image src={post.image} alt={post.title} />
          </GridCard>
        )}
    </GridContainer>
  )
}

export default GroupPostcasts;
