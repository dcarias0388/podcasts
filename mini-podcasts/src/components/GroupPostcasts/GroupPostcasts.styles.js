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
    border: none;
    background-color: transparent;

    & > image {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-top: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 1;

    & > h3 {
        text-align: center;
        padding: 0;
        margin: 0;
    }
`;