import React from 'react';
import {
  HeaderContainer,
  Col,
  Menu,
  MenuItem,
  SubMenu,
  Translate,
  List,
} from 'components/Header/Header.styles';
import { Container } from 'Common.styles';

const Header = () => (
  <HeaderContainer>
    <Container>
      <Col>
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          alt='logo'
          height={20}
        />
        <Menu>
          <MenuItem>
            <a href='#'>Movies</a>
            <SubMenu>
              <a href='#'>Popular</a>
              <a href='#'>Now Playing</a>
              <a href='#'>Upcoming</a>
              <a href='#'>Top Rated</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a href='#'>TV Shows</a>
            <SubMenu>
              <a href='#'>Popular</a>
              <a href='#'>Airing Today</a>
              <a href='#'>On TV</a>
              <a href='#'>Top Rated</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a href='#'>People</a>
            <SubMenu>
              <a href='#'>Popular People</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a href='#'>More</a>
            <SubMenu>
              <a href='#'>Discussions</a>
              <a href='#'>Leadboard</a>
              <a href='#'>Support</a>
              <a href='#'>API</a>
            </SubMenu>
          </MenuItem>
        </Menu>
      </Col>
      <Col>
        <List>
          <img
            src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg'
            alt=''
            height={22}
          />
          <Translate>en</Translate>
          <a href='#'>Login</a>
          <a href='#'>Join TMDB</a>
          <img
            src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg'
            alt=''
            height={30}
          />
        </List>
      </Col>
    </Container>
  </HeaderContainer>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
