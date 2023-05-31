import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// styles
import {Container, TotalWrapper, TableContainer, Table, ContainerScroll, TableHead, TableBody, TableRow, TableHeadCell, TableCell} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {

    const msToHours = (millis) => {
    
          let ms = millis % 1000;
          millis = (millis - ms) / 1000;
          let secs = millis % 60;
          secs = (secs < 10)? `0${secs}` : secs;
          millis = (millis - secs) / 60;
          let mins = millis % 60;
          mins = (mins < 10)? `0${mins}` : mins;
          let hrs = (millis - mins) / 60;
          hrs = (hrs < 10)? `0${hrs}` : hrs;

          return `${hrs} : ${mins} : ${secs}`;
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
                        <Link key={pod.id} to={`/podcast/${pod.id}`} state= {{ podcast: pod }}>
                        <TableRow key={episode?.id} $color={index%2===0}>
                            <TableCell>{episode?.title}</TableCell>
                            <TableCell>{new Date(episode?.date).toLocaleDateString('es-ES')}</TableCell>
                            <TableCell>{msToHours(episode?.duration)}</TableCell>
                        </TableRow>
                        </>
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
