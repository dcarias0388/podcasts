import React from 'react';
import PropTypes from 'prop-types';

// styles
import {TotalWrapper} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {
  return (
    <TotalWrapper>
        <h2>{`Episodes: ${data.totalEpisodes}`}</h2>
    </TotalWrapper>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Episode</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.episodes.map(episode => (
            <TableRow key={episode.id}>
              <TableCell>{episode.name}</TableCell>
              <TableCell>{episode.episode}</TableCell>
              <TableCell>{episode.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

SummaryEpisode.propTypes = {
    data: PropTypes.object,
};

export default SummaryEpisode;
