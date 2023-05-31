import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    border: 1px solid #999999;
    border-top: none;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 1rem;

    & h2 {
        margin: 8px 0;
    }

    & audio {
        width: 100%;
        margin: .5rem 0;
        padding: 0;
        border-radius: 4px;
    }
`;

export const Divider = styled.hr`
    width: 100%;
    height: 0;
    border: .5px solid #EFEFEF;
    margin: 1rem 0;
`;