import React from 'react';
import PropTypes from 'prop-types';

// styles
import {Container, TotalWrapper, TableContainer, Table, TableHead, TableBody, TableRow, TableHeadCell, TableCell} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {
    console.log('DATA',data);
  return (
    <Container>
    <TotalWrapper>
        <h2>{`Episodes: ${data?.totalEpisodes}`}</h2>
    </TotalWrapper>
    <TableContainer>
    {data ? (<Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Duration</TableHeadCell>
          </TableRow>
        </TableHead>
        <div style={{overflow:'auto'}}>
        <TableBody>
          {data?.episodes?.map((episode, index) => (
            <TableRow key={episode?.id} $color={index%2===0}>
              <TableCell>{episode?.title}</TableCell>
              <TableCell>{episode?.date}</TableCell>
              <TableCell>{episode?.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </div>
      </Table>) : null}
      
    </TableContainer>
    </Container>
  )
}

SummaryEpisode.propTypes = {
    data: PropTypes.object,
};

export default SummaryEpisode;
