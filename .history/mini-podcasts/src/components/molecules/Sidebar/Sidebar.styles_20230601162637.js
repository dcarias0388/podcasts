import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    width: 250px;
    height: 100%;
    border-radius: 4px ;
    flex-direction: column;
    border: 1px solid #999999;
    border-top: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 2rem 1rem;

    & a {
        color: inherit;
        text-decoration: none;
    }

    &>a:first-child{
        margin: 0 auto;
    }

    & img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
        object-fit: cover;
        position: relative;
    }

    & h3 {
       margin: 0 0 0.2rem 0;
       padding: 0;
    }
    
    & p {
        padding: 0;
        margin: 0;
        color: #343434;
    }
`;

export const Divider = styled.hr`
    width: 100%;
    height: 0;
    border: .5px solid #EFEFEF;
    margin: 1rem 0;
`;