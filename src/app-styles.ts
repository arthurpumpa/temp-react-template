import {css, keyframes} from 'emotion';

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const app = css`
    text-align: center;   
`;

export const logo = css`
    animation: ${spin} infinite 20s linear;
    height: 80px;
`;

export const header = css`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

export const title = css`
    font-size: 1.5em;
`;

export const intro = css`
    font-size: large;
`;
