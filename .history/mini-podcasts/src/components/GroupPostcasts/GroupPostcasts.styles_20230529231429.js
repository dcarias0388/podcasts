import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const GridCard = styled.div`
    display: flex;
    flex-direction: column;
`;