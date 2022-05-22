import React, { useState } from 'react';
import {
  HeaderContainer,
  Sidebar,
  Col,
  Menu,
  MenuItem,
  SubMenu,
  Translate,
  List,
} from 'components/Header/header.styles';
import { Container, Icon } from 'components/shared/shared.styles';
import logoText from 'assets/logo-text.svg';
import plus from 'assets/plus.svg';
import search from 'assets/search.svg';
import burgerMenu from 'assets/burger-menu.svg';
import logo from 'assets/logo.svg';
import profileIcon from 'assets/profile-icon.svg';

/**
 * Construct Header component
 *
 * @returns {component} Header component
 */
function Header() {
  // Sidebar open status
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Col show='desktop'>
          <img
            src={logoText}
            alt='logo'
            height={20}
          />
          <Menu>
            <MenuItem>
              <a href='/#'>Movies</a>
              <SubMenu>
                <a href='/#'>Popular</a>
                <a href='/#'>Now Playing</a>
                <a href='/#'>Upcoming</a>
                <a href='/#'>Top Rated</a>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <a href='/#'>TV Shows</a>
              <SubMenu>
                <a href='/#'>Popular</a>
                <a href='/#'>Airing Today</a>
                <a href='/#'>On TV</a>
                <a href='/#'>Top Rated</a>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <a href='/#'>People</a>
              <SubMenu>
                <a href='/#'>Popular People</a>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <a href='/#'>More</a>
              <SubMenu>
                <a href='/#'>Discussions</a>
                <a href='/#'>Leadboard</a>
                <a href='/#'>Support</a>
                <a href='/#'>API</a>
              </SubMenu>
            </MenuItem>
          </Menu>
        </Col>
        <Col show='desktop'>
          <List>
            <img
              src={plus}
              alt=''
              height={22}
            />
            <Translate>en</Translate>
            <a href='/#'>Login</a>
            <a href='/#'>Join TMDB</a>
            <img
              src={search}
              alt=''
              height={30}
            />
          </List>
        </Col>
        <Col
          show='tablet'
          onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <Icon white>
            <img
              src={burgerMenu}
              alt='menu'
            />
          </Icon>
        </Col>
        <Col show='tablet'>
          <img
            src={logo}
            alt='logo'
          />
        </Col>
        <Col show='tablet'>
          <Icon white>
            <img
              src={profileIcon}
              alt='profile'
            />
          </Icon>
          <img
            src={search}
            alt='search'
          />
        </Col>
      </Container>
      <Sidebar show={isSidebarOpen}>
        <h5>
          <a href='/#'>Movies</a>
        </h5>
        <h5>
          <a href='/#'>TV Shows</a>
        </h5>
        <h5>
          <a href='/#'>People</a>
        </h5>
        <p>
          <a href='/#'>Contribution Bible</a>
        </p>
        <p>
          <a href='/#'>Apps</a>
        </p>
        <p>
          <a href='/#'>Discussions</a>
        </p>
        <p>
          <a href='/#'>Leaderboard</a>
        </p>
        <p>
          <a href='/#'>Contribute</a>
        </p>
        <p>
          <a href='/#'>API</a>
        </p>
        <p>
          <a href='/#'>Support</a>
        </p>
        <p>
          <a href='/#'>About</a>
        </p>
        <p>
          <a href='/#'>Login</a>
        </p>
      </Sidebar>
    </HeaderContainer>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
