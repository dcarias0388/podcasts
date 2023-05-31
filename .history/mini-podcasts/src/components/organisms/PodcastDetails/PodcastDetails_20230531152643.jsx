import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Outlet, useLocation } from "react-router-dom";

// molecules
import { Sidebar, SummaryEpisode } from 'components/molecules';

// styles
import {Container} from './PodcastDetails.styles';

const PodcastDetails = ({podcastData}) => {
  const { episodeId } = useParams();
  const location = useLocation();
  const { podcast } = location.state;
  console.log('ENTRO', episodeId);
  return (
    <Container>
        <Sidebar podcast={podcast}/>
        {(!episodeId) && (
            <SummaryEpisode data={podcastData}/>
        )}
        <Outlet />
    </Container>
  )
}

PodcastDetails.propTypes = {
  podcastData: PropTypes.object,
};

export default PodcastDetails;
