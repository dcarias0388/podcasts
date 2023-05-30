import React from 'react';
import PropTypes from 'prop-types';

// styles
import {TotalWrapper} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {
  return (
    <TotalWrapper>
        <h2>{`Episodes: ${data.totalEpisodes}`}</h2>
    </TotalWrapper>
  )
}

SummaryEpisode.propTypes = {
    data: PropTypes.object,
};

export default SummaryEpisode;
