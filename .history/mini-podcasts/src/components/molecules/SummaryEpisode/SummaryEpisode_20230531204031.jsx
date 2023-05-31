import React from 'react';
import { Link, useLocation, useOutletContext } from "react-router-dom";

// utils
import {msToHours} from 'utils/helpers';

// styles
import {Container, TotalWrapper, TableContainer, Table, ContainerScroll, TableHead, TableBody, TableRow, TableHeadCell, TableCell} from './SummaryEpisode.styles';

const SummaryEpisode = () => {
    const location = useLocation();
    const url = location.pathname;
    const {podcast} = location.state;
    const [podcastData] = useOutletContext();

  return (
    <Container>
    <TotalWrapper>
        <h2>{`Episodes: ${podcastData?.totalEpisodes}`}</h2>
    </TotalWrapper>
    <TableContainer>
    {podcastData ? (
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
                    {podcastData?.episodes?.map((episode, index) => (
                        <TableRow key={episode?.id} $color={index%2===0}>
                            <Link to={`${url}/episode/${episode.id}`} state= {{ episode: episode, podcast:podcast }}>
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

export default SummaryEpisode;
