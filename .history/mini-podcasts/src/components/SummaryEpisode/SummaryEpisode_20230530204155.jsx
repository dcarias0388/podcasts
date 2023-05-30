import React from 'react';
import PropTypes from 'prop-types';

// styles
import {Container, TotalWrapper, TableContainer} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {
    console.log('DATA',data);
  return (
    <Container>
    <TotalWrapper>
        <h2>{`Episodes: ${data?.totalEpisodes}`}</h2>
    </TotalWrapper>
    <TableContainer>
    {data ? (<table>
        <th>
          <tr>
            <td>Title</td>
            <td>Date</td>
            <td>Duration</td>
          </tr>
        </th>
        <tbody>
          {data?.episodes.map(episode => (
            <tr key={episode.id}>
              <td>{episode.title}</td>
              <td>{episode.date}</td>
              <td>{episode.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>) : null}
      
    </TableContainer>
    </Container>
  )
}

SummaryEpisode.propTypes = {
    data: PropTypes.object,
};

export default SummaryEpisode;
