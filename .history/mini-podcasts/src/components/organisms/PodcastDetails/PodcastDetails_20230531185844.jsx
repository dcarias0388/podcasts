import React from 'react';
import PropTypes from 'prop-types';
import { Route, useParams, Outlet, useLocation } from "react-router-dom";

// molecules
import { Sidebar, SummaryEpisode, EpisodeDetails } from 'components/molecules';

// styles
import {Container} from './PodcastDetails.styles';

const PodcastDetails = ({data}) => {
  const location = useLocation();
  const { podcast } = location.state;
  const url = location.pathname;

  return (
    <Container>
        <Sidebar podcast={podcast}/>
        <Route path={url} element={<SummaryEpisode data={data}/>}/>
        <Route path={`${url}/episodes/:episodeId`} element={<EpisodeDetails />}/>
        <Outlet />
    </Container>
  )
}

PodcastDetails.propTypes = {
  data: PropTypes.object,
};

export default PodcastDetails;
