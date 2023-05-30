import React from 'react';
import PropTypes from 'prop-types';

// styles
import {TotalWrapper} from './Summary.styles';

const SummaryEpisode = ({data}) => {
  return (
    <TotalWrapper>SummaryEpisode</TotalWrapper>
  )
}

SummaryEpisode.propTypes = {
    data: PropTypes.object,
};

export default SummaryEpisode;
