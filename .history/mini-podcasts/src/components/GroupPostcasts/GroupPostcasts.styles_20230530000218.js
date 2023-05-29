import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 20px;
`;

export const GridCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-top: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 1;

    & > image {
        height: 100px;
        width: 100px;
        z-index: 2;
    }
`;