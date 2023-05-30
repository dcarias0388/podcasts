import React, {useEffect, useState} from 'react';
import { useParams, Outlet } from "react-router-dom";

// services api
import { podcastDetails } from 'services/apiAxios';

// utils
import {verifyTime} from 'utils/verifyTime';

const PodcastDetails = () => {
  const { podcastId, episodeId } = useParams();
  const [podcast, setPodcast] = useState({});

 useEffect (() => {
    /**
     * Si no existe el podcastKey en localStorage o si está desactializado, se hace la petición de nuevo
     * y se actualiza el timestamp del objeto almacenado en el localStorage
     */
    this.props.isLoading(true);

    const podcastToken = `podcast${podcastId}`;

    if (!localStorage.getItem(podcastToken) || verifyTime(JSON.parse(localStorage.getItem(podcastToken)).timestamp)) {
        podcastDetails(podcastId).then(podDetail => {
          if (!podDetail) {
            console.error("Podcast not found.");
            this.setState({ error: true });
            // Se desactiva el spinner
            this.props.isLoading(false);
            return;
          }
          api.podcasts.getEpisodes(podcast).then(episodes => {
            if (!episodes) {
              console.error("Episodes not found.");
              this.setState({ error: true });
              // Se desactiva el spinner
              this.props.isLoading(false);
              return;
            }
            podcast.episodes = episodes;
            podcast.description = this.props.location.state.podcast.summary;
            this.setState({ podcast });
            // Se añade/actualiza el objeto del localStorage
            let lsObject = { value: podcast, timestamp: new Date().getTime() };
            try {
              localStorage.setItem(podcastKey, JSON.stringify(lsObject));
            } catch (e) {
              console.log("Local Storage is full, please empty data: " + e);
            }

            // Se desactiva el spinner
            this.props.isLoading(false);
          });
        });
    } else {
      // Se obtiene la respuesta almacenada en el localStorage y se actualiza el estado
      let lsPodcast = JSON.parse(localStorage.getItem(podcastKey)).value;
      this.setState({ podcast: lsPodcast });
      // Se desactiva el spinner
      this.props.isLoading(false);
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
