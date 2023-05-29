import React from 'react'

// styles
import {GridContainer, GridCard} from './GroupPostcasts.styles';

const GroupPostcasts = ({postcasts}) => {
  return (
    <GridContainer>
        {postcasts?.map((post) => (
            <image src={post.image} alt={post.title} />
          <GridCard key={post.id}>
             <h3>{post.title}</h3>
             <p>Author: {post.author}</p>
          </GridCard>
        ))}
    </GridContainer>
  )
}

export default GroupPostcasts;
