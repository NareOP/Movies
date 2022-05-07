import React from 'react';
import { Global, css } from '@emotion/react';
import styled from 'styled-components';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        border: 0;
        color: #000;
        font-family: 'Source Sans Pro', Arial, sans-serif;
        font-size: 16px;
        box-sizing: border-box;
        font-weight: 600;
      }

      html {
        --scrollerGrey: 219, 219, 219;
        --lightGrey: 227, 227, 227;
        --darkerGrey: 200, 200, 200;
        --tmdbDarkBlue: 3, 37, 65;
        --tmdbLightBlue: 1, 180, 228;
        --tmdbLighterGreen: 192, 254, 207;
        --tmdbLightGreen: 30, 213, 169;
        --tmdbLogoGreen: 144, 206, 161;
        --tmdbLogoOrange: 253, 193, 112;
        --tmdbLogoRed: 217, 59, 99;
        --accountSilver: 149, 149, 149;
        --accountPink: 234, 20, 140;
        --accountPurple: 128, 91, 231;
        --accountGreen: 1, 210, 119;
        --accountTeal: 1, 198, 172;
        --accountLightBlue: 1, 180, 228;
        --accountBlue: 1, 119, 210;
        --accountOrange: 210, 119, 1;
        --accountYellow: 210, 144, 1;
        --accountRed: 212, 2, 66;
        --imageBorderRadius: 8px;
        --maxPrimaryPageWidth: 1400px;
      }
    `}
  />
);

export default GlobalStyles;

const Main = styled.main`
  wdith: 100%;
  padding: 30px 0;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    align-items: felx-start;
  }
`;

const Title = styled.h2`
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.6em;
`;

export { Main, Title };
