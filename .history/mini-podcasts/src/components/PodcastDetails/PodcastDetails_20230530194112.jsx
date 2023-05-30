import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useParams, Outlet, useLocation } from "react-router-dom";

// services api
import { podcastDetails } from '../../services/apiAxios';

// utils
import {verifyTime} from '../../utils/verifyTime';

// components
import Sidebar from '../Sidebar';

// styles
import {Container} from './PodcastDetails.styles';

const PodcastDetails = ({loading, isLoading}) => {
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
        podcastDetails(podcastId).then(podDetail => console.log('RESULT',podDetail));
          
         
    } else {
      // Se obtiene la respuesta almacenada en el localStorage y se actualiza el estado
      let podStorage = JSON.parse(localStorage.getItem(podcastToken)).value;
      setPodcastData(podStorage);

      // loading stops
      isLoading(false);
    }
  },[isLoading, podcastId]);

  return (
    <Container>
        <Sidebar podcast={podcast}/>
        PodcastDetails
        <Outlet />
    </Container>
  )
}

PodcastDetails.propTypes = {
    isLoading: PropTypes.func,
  };

export default PodcastDetails;
