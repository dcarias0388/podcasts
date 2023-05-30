import React, {useEffect, useState} from 'react';
import { useParams, Outlet } from "react-router-dom";

// services api
import { podcastDetails } from 'services/apiAxios';

// utils
import {verifyTime} from 'utils/verifyTime';

const PodcastDetails = ({loading, isLoading}) => {
  const { podcastId, episodeId } = useParams();
  const [podcast, setPodcast] = useState({});

 useEffect (() => {
    // starting page load
    isLoading(true);

    const podcastToken = `pod${podcastId}`;

    // checking if there are postcasts stored in the local storage and if it is, if it is not expired
    if (!localStorage.getItem(podcastToken) || verifyTime(JSON.parse(localStorage.getItem(podcastToken)).timestamp)) {
        podcastDetails(podcastId).then(podDetail => console.log(podDetail));
          
         
    } else {
      // Se obtiene la respuesta almacenada en el localStorage y se actualiza el estado
      let podStorage = JSON.parse(localStorage.getItem(podcastToken)).value;
      setPodcast(podStorage);

      // loading stops
      isLoading(false);
    }
  },[]);

  return (
    <div>
     PodcastDetails
     <Outlet />
    </div>
  )
}

export default PodcastDetails;
