import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 450px;
    flex-direction: column;
    border: 1px solid #999999;
    border-top: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 2rem 1rem;

    & img {
        text-align: center;
        width: 150px;
        height: 150px;
        border-radius: 5px;
        object-fit: cover;
        position: relative;
    }

    & > h3 {
        padding: 0;
        margin: 0;
    }

    & > p {
        color: #343434;
    }
`;