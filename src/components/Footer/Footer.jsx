import React from 'react';
import { FooterContainer, FooterLogo, FooterMenu } from './Footer.styles';

const Footer = () => (
  <FooterContainer>
    <div>
      <FooterLogo>
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
          alt=''
        />
        <a href=''>Join the community</a>
      </FooterLogo>
      <FooterMenu>
        <h3>The Basics</h3>
        <ul>
          <li>About TMDB</li>
          <li>Contact Us</li>
          <li>Support Forums</li>
          <li>API</li>
          <li>System Status</li>
        </ul>
      </FooterMenu>
      <FooterMenu>
        <h3>Get Involved</h3>
        <ul>
          <li>Contribution Bible</li>
          <li>Add New Movie</li>
          <li>Add New TV Show</li>
        </ul>
      </FooterMenu>
      <FooterMenu>
        <h3>Community</h3>
        <ul>
          <li>Guidelines</li>
          <li>Discussions</li>
          <li>Leaderboard</li>
          <li>Twitter</li>
        </ul>
      </FooterMenu>
      <FooterMenu>
        <h3>Legal</h3>
        <ul>
          <li>Terms of Use</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </FooterMenu>
    </div>
  </FooterContainer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
