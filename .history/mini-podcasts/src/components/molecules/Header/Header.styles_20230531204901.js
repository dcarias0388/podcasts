import styled from 'styled-components';
import { rotate } from '../../../utils/animation';

export const Nav = styled.div`
    display: flex;
    width: 100%;
    height: 56px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    max-width: 95%;
    align-items: center;

    & > h1 {
        font-size: 24px;
        font-weight: bold;
        margin-left: 16px;
        color: DodgerBlue;
    }

    & a {
        color: DodgerBlue;
        text-decoration: none;
    }
`;

export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: DodgerBlue;
    position: absolute;
    right: 16px;
`;

export const Spinner = styled.span`
    margin: auto;
    display: flex;
    width: 20px;
    height: 20px;
    border-top: 3px solid rgba(255, 255, 255, 0.5);
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    border-right: 3px solid rgba(255, 255, 255, 0.5);
    border-left: 3px solid gray;
    border-radius: 50%;
    animation: ${rotate} 1.5s linear infinite;
`;