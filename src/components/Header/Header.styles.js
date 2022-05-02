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
`;

const MenuSubitem = styled.div``;

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

  ${MenuSubitem} {
    display: none;
  }

  :hover ${MenuSubitem} {
    display: none;
  }
`;

const Menu = styled.ul`
  list-style: none;
  align-items: center;
  flex-direction: row;
  display: flex;

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

export { HeaderContainer, Col, Menu, MenuItem, MenuSubitem, Translate, List };
