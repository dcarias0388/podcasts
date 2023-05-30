import React from 'react';
import PropTypes from 'prop-types';

// styles
import {Container, TotalWrapper, TableContainer, Table, ContainerScroll, TableHead, TableBody, TableRow, TableHeadCell, TableCell} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {

    const msToHours = (s) => {
    
          let ms = s % 1000;
          s = (s - ms) / 1000;
          let secs = s % 60;
          s = (s - secs) / 60;
          let mins = s % 60;
          mins = (mins < 10)? `0${mins}` : mins;
          let hrs = (s - mins) / 60;
          hrs = (hrs < 10)? `0${hrs}` : hrs;

          return hrs + ':' + mins;
        // let minutes = Math.floor((millis / 1000 / 60) % 60);
        // minutes = (minutes < 10)? `0${minutes}` : minutes;
        // let hours = Math.floor(minutes / 60);
        // return `${hours}:${minutes}`;
        // let hour = Math.floor(millis / 3600000);
        // hour = (hour < 10)? '0' + hour : hour;
        // let minute = Math.floor((millis / 1000 / 60) % 60);
        // minute = (minute < 10)? '0' + minute : minute;
        // return hour + ':' + minute;
    }

  return (
    <Container>
    <TotalWrapper>
        <h2>{`Episodes: ${data?.totalEpisodes}`}</h2>
    </TotalWrapper>
    <TableContainer>
    {data ? (
        <ContainerScroll>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Title</TableHeadCell>
                        <TableHeadCell>Date</TableHeadCell>
                        <TableHeadCell>Duration</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.episodes?.map((episode, index) => (
                        <TableRow key={episode?.id} $color={index%2===0}>
                            <TableCell>{episode?.title}</TableCell>
                            <TableCell>{new Date(episode?.date).toLocaleDateString('es-ES')}</TableCell>
                            <TableCell>{msToHours(episode?.duration)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ContainerScroll>) : null
    }
    </TableContainer>
    </Container>
  )
}

SummaryEpisode.propTypes = {
    data: PropTypes.object,
};

export default SummaryEpisode;
