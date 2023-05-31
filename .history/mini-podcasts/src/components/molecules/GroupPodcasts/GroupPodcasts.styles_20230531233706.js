import styled from 'styled-components';

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-items: stretch;
    max-width: 80%;
    margin: 0 auto;

    & a {
        color: inherit;
        text-decoration: none;
        height: 100% ;
    }
`;

export const GridCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;

    & > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        position: relative;
        bottom: -50px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #999999;
    border-top: none;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 1;

    & > h3 {
        padding: 0;
        margin: 0;
    }

    & > p {
        color: #343434;
    }
`;