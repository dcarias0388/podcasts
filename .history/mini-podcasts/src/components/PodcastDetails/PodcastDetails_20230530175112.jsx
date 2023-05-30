import React from 'react';
import { useParams, Outlet } from "react-router-dom";

const PodcastDetails = () => {
  const { podcastId, episodeId } = useParams();

  return (
    <div>
     PodcastDetails
     <Outlet />
    </div>
  )
}

export default PodcastDetails;
