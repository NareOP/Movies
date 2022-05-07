import styled from 'styled-components';

const FooterContainer = styled.header`
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  padding: 0;
  background-image: radial-gradient(
    at 30% top,
    #031d33 0%,
    rgba(var(--tmdbDarkBlue), 1) 70%
  );
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  > div {
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const FooterLogo = styled.header`
  text-align: right;
  position: relative;
  top: -36px;
  right: 0;
  margin-right: 40px;

  img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 130px;
    height: 94px;
  }

  a {
    position: relative;
    top: 140px;
    border-color: #fff;
    background-color: #fff;
    color: rgba(var(--tmdbLightBlue), 1);
    font-size: 1.3em;
    font-weight: bold;
    display: inline-block;
    word-wrap: break-word;
    white-space: normal;
    text-transform: uppercase;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
    transition: linear 0.1s;
    text-decoration: none;
  }
`;
const FooterMenu = styled.header`
  margin-right: 40px;
  min-width: 0;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
    font-size: 1.4em;
    line-height: 1.4em;
    text-transform: uppercase;
    color: #fff;
    white-space: nowrap;
  }

  ul li {
    line-height: 1.6em;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-weight: 300;
  }
`;

export { FooterContainer, FooterLogo, FooterMenu };
