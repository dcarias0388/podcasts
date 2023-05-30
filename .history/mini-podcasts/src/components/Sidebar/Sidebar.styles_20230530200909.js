import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 250px;
    border-radius: 4px ;
    flex-direction: column;
    border: 1px solid #999999;
    border-top: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 2rem 1rem;

    & img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
        object-fit: cover;
        position: relative;
        margin: 0 auto;
    }

    & > h3 {
       margin-bottom: 0.5rem;
    }
    & > p {
        padding: 0;
        margin: 0;
        color: #343434;
    }
`;