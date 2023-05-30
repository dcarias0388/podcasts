import React from 'react';
import { useParams } from "react-router-dom";



const PodcastDetails = () => {
  const { podcastId, episodeId } = useParams();

  return (
    <Sidebar />
    <PodcastDetails podcastId={podcastId}/>
    <EpisodeDetails podcastId={podcastId} episodeId={episodeId}/>
  )
}

export default PodcastDetails;
