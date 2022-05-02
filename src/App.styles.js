import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        border: 0;
        color: #000;
        font-family: 'Source Sans Pro', Arial, sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
