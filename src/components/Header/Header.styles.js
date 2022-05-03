import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  height: 64px;
  width: 100%;
  z-index: 10;
  transition: top 0.2s linear;
  font-weight: 600;
`;

const SubMenu = styled.div`
  display: none;
  min-width: 10em;
  position: absolute;
  top: 3em;
  color: #212529;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  padding: 4px 0;

  a {
    color: black !important;
    line-height: 24px;
    font-stretch: 100%;
    font-style: normal;
    font-weight: 400;
    max-height: 826px;
    overflow: auto;
    font-size: 16px;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    transform: translateY(0);
    padding: 0 20px !important;

    :hover {
      background: #21252908;
    }
  }
`;
const MenuItem = styled.li`
  margin-right: 14px;

  a {
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 40px;
    padding: 0.5rem 0.5rem;
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;

    ${SubMenu} {
      display: block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;

  img {
    margin-left: 10px;
  }
`;

const List = styled.div`
  list-style: none;
  align-items: center;
  flex-direction: row;
  display: flex;

  span,
  img,
  a {
    margin-left: 30px;
  }

  a {
    white-space: nowrap;
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }

  *:hover {
    cursor: pointer;
  }
`;

const Translate = styled.span`
  width: 28px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 3px 5px;
  transition: linear 0.1s;
  color: #fff;
  font-size: 0.9em;
  text-transform: uppercase;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    color: rgba(var(--tmdbDarkBlue), 1);
    background-color: #fff;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > img {
    margin-right: 1em;
  }
`;

export { HeaderContainer, Col, Menu, MenuItem, SubMenu, Translate, List };
