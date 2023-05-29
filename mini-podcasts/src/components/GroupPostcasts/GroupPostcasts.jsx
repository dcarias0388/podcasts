import React from 'react'

// styles
import {GridContainer, GridCard, TextContainer} from './GroupPostcasts.styles';

const GroupPostcasts = ({postcasts}) => {
  return (
    <GridContainer>
        {postcasts?.map((post) => (
          <GridCard key={post.id}>
             <image src={post.image} alt={post.title} />
             <TextContainer>
             <h3>{post.title}</h3>
             <p>Author: {post.author}</p>
             </TextContainer>
          </GridCard>
        ))}
    </GridContainer>
  )
}

export default GroupPostcasts;
