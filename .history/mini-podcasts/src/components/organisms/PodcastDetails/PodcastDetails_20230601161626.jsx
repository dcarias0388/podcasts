import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useParams, Outlet, useLocation } from "react-router-dom";

// molecules
import { Sidebar } from 'components/molecules';

// services api
import { podcastDetails } from 'services/apiAxios';

// utils
import {verifyTime} from 'utils/helpers';

// styles
import {Container} from './PodcastDetails.styles';

const PodcastDetails = ({loading, isLoading}) => {
  const location = useLocation();
  const { podcast } = location.state;
  const { podcastId } = useParams();
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
    <>
    {!loading ? (
      <Container>
        <Sidebar podcast={podcast}/>
        <Outlet context={[podcastData]}/>
    </Container>
    ) : (<h2>Loading...</h2>)}
    </>
  )
}

PodcastDetails.propTypes = {
  loading: PropTypes.bool,
  isLoading: PropTypes.func,
};

export default PodcastDetails;
