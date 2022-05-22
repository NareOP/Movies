import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    border: 0;
    color: #000;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    font-weight: 600;
    }

    html {
    --tmdbDarkBlue: #032541ff;
    --tmdbLightBlue: #01b4e4ff;
    --accountLightBlue: #01b4e4ff;
    --imageBorderRadius: 0.5rem;
    --maxPrimaryPageWidth: 87.5rem;
    }
`;
