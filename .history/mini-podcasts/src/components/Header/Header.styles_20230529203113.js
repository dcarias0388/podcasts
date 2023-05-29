import styled from 'styled-components';
import { rotate } from 'utils/rotate';

export const Nav = styled.div`
    display: flex;
    width: 100%;
    height: 56px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);

    & > h1 {
        font-size: 24px;
        font-weight: bold;
        margin-left: 16px;
        color: DodgerBlue;
    }
`;

export const Spinner = styled.span`
    margin: auto;
    width: 25px !important;
    height: 25px;
    border-top: 3px solid rgba(255, 255, 255, 0.5);
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    border-right: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: ${rotate} 1.5s linear infinite;
`;