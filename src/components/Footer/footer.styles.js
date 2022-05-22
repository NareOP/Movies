import styled from 'styled-components';

const FooterContainer = styled.footer`
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  padding: 0;
  background-image: radial-gradient(
    at 30% top,
    #031d33 0%,
    var(--tmdbDarkBlue) 70%
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
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media screen and (max-width: 56.25rem) {
      flex-direction: column;
    }
  }
`;

const FooterLogo = styled.div`
  text-align: right;
  position: relative;
  top: -2.25rem;
  right: 0;
  margin-right: 2.5rem;

  img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 8.125rem;
    height: 5.875rem;

    @media screen and (max-width: 56.25rem) {
      display: none;
    }
  }

  a {
    position: relative;
    top: 8.75rem;
    border-color: #fff;
    background-color: #fff;
    color: var(--tmdbLightBlue);
    font-size: 1.3rem;
    font-weight: bold;
    display: inline-block;
    word-wrap: break-word;
    white-space: normal;
    text-transform: uppercase;
    border: 0.125rem solid #fff;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    transition: linear 0.1s;
    text-decoration: none;

    @media screen and (max-width: 56.25rem) {
      top: 0;
    }
  }
`;
const FooterMenu = styled.div`
  margin-right: 2.5rem;
  min-width: 0;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    color: #fff;
    white-space: nowrap;
  }

  ul li {
    line-height: 1.6rem;
    max-width: 16.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-weight: 300;
  }

  @media screen and (max-width: 56.25rem) {
    margin-bottom: 1.5rem;
  }
`;

export { FooterContainer, FooterLogo, FooterMenu };
