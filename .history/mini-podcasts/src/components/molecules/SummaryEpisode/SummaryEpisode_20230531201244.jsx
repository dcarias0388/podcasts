import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

// utils
import {msToHours} from 'utils/helpers';

// styles
import {Container, TotalWrapper, TableContainer, Table, ContainerScroll, TableHead, TableBody, TableRow, TableHeadCell, TableCell} from './SummaryEpisode.styles';

const SummaryEpisode = ({data}) => {
    const location = useLocation();
    const url = location.pathname;
    console.log('LOCATION', location);

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
                            <Link to={`${url}/episode/${episode.id}`} state= {{ episode: episode, podcast:location.state.podcast }}>
                                <TableCell>{episode?.title}</TableCell>
                            </Link>
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
