import React, {useEffect, useState} from 'react';
import { useParams, useLocation } from "react-router-dom";

// services api
import { podcastDetails } from 'services/apiAxios';

// utils
import {verifyTime} from 'utils/verifyTime';

// organism components
import PodcastDetails from 'components/organisms';

const Podcast = ({loading, isLoading}) => {
  const { podcastId, episodeId } = useParams();
  const location = useLocation();
  const { podcast } = location.state;
  const [podcastData, setPodcastData] = useState({});

 useEffect (() => {
    // starting page load
    isLoading(true);

    const podcastToken = `pod${podcastId}`;
    // checking if there are postcasts stored in the local storage and if it is, if it is not expired
    if (!localStorage.getItem(podcastToken) || verifyTime(JSON.parse(localStorage.getItem(podcastToken)).timestamp)) {
        podcastDetails(podcastId).then(podDetail => {
            if(podDetail) {
                // update states postcast details
                setPodcastData(podDetail);

                // object postcast to store in local storage and update the timestamp
                const objPost = {value: podDetail, timestamp: new Date().getTime()}; 

                localStorage.setItem(podcastToken, JSON.stringify(objPost));

                // loading stops
                isLoading(false);
            }else{
                console.log('No details podcast to show');
                // loading stops
                isLoading(false);
                return;
            }  
        });  
    } else {
      // Se obtiene la respuesta almacenada en el localStorage y se actualiza el estado
      let podStorage = JSON.parse(localStorage.getItem(podcastToken)).value;
      setPodcastData(podStorage);

      // loading stops
      isLoading(false);
    }
  },[isLoading, podcastId]);

  return (
    <PodcastDetails podcast={podcast} data={podcastData} episodeId={episodeId}/>
  )
}

export default Podcast;
