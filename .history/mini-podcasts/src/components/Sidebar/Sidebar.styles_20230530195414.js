import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 30%;
    flex-direction: column;
    border: 1px solid #999999;
    border-top: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    & img {
        text-align: center;
    }

    & > h3 {
        padding: 0;
        margin: 0;
    }

    & > p {
        color: #343434;
    }
`;