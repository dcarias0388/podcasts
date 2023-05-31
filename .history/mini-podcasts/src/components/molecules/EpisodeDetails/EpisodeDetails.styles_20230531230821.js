import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;

    & audio {
        width: 100%;
        padding: 1rem 0;
    }
`;

export const Divider = styled.hr`
    width: 100%;
    height: 0;
    border: .5px solid #EFEFEF;
    margin: 1rem 0;
`;