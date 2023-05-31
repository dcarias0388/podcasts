import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    position: relative;
    border: 1px solid #999999;
    border-top: none;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

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