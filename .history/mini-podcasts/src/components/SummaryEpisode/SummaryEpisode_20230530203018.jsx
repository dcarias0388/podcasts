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
        <th>
          <tr>
            <tc>Name</tc>
            <tc>Episode</tc>
            <tc>Status</tc>
          </tr>
        </th>
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
