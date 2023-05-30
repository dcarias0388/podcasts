import React from 'react';
import { useParams } from "react-router-dom";

const PodcastDetails = () => {
  const { podcastId } = useParams();

  return (
    <div>PodcastDetails</div>
  )
}

export default PodcastDetails;
