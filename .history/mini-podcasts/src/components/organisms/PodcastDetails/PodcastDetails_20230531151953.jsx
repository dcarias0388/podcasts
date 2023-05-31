import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useParams, Outlet, useLocation } from "react-router-dom";

// services api
import { podcastDetails } from 'services/apiAxios';

// utils
import {verifyTime} from 'utils/verifyTime';

// molecules
import { Sidebar, SummaryEpisode } from 'components/molecules';

// styles
import {Container} from './PodcastDetails.styles';

const PodcastDetails = ({podcastData}) => {
  const { episodeId } = useParams();
  const location = useLocation();
  const { podcast } = location.state;

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
    isLoading: PropTypes.func,
    loading: PropTypes.bool,
};

export default PodcastDetails;
