import React from 'react';
import PropTypes from 'prop-types';

// styles
import {Container, TotalWrapper, TableContainer} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {
  return (
    <Container>
    <TotalWrapper>
        <h2>{`Episodes: ${data.totalEpisodes}`}</h2>
    </TotalWrapper>
    <TableContainer>
      <table>
        <th>
          <tr>
            <td>Name</td>
            <td>Episode</td>
            <td>Status</td>
          </tr>
        </th>
        <tbody>
          {data.episodes.map(episode => (
            <tr key={episode.id}>
              <td>{episode.name}</td>
              <td>{episode.episode}</td>
              <td>{episode.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
    </Container>
  )
}

SummaryEpisode.propTypes = {
    data: PropTypes.object,
};

export default SummaryEpisode;
