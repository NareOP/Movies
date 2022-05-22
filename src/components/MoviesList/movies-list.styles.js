import styled from 'styled-components';

const MoreContent = styled.div`
  background-color: #fff;
  color: #000;
  border: 0.063rem solid #21252926;
  position: absolute;
  display: flex;
  opacity: 1;
  width: 19rem;
  overflow: visible;
  align-self: stretch;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 2.625rem;
  left: 1.25rem;
  z-index: 15;
  border-radius: 0.25rem;
`;

const Item = styled.div(
  ({ showMore }) => `
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 0.063rem solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  margin-top: 1.875rem;
  max-width: 11.25rem;
  box-shadow: 0 0.125rem 0.5rem #0000001a;

  &::before {
    display: ${showMore ? 'inline-block' : 'none'};
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    z-index: 2;
    transition: linear .1s;
    border-radius: var(--imageBorderRadius);
  }

  ${MoreContent} {
    display: ${showMore ? 'inline-block' : 'none'};
  }
`
);

const MoreContentItem = styled.div`
  border-top: 0.063rem solid #21252908;
  padding: 0.25rem 0;

  p {
    padding: 0.375rem 1.25rem;
    font-size: 0.9rem;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    width: 100%;
  }

  p:last-child {
    a {
      font-size: 0.9em;
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      color: #00000099;
      background-color: transparent;
      text-decoration: none;
    }

    img {
      top: 0.125rem;
      margin-left: 0.25rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
    }

    &:hover {
      background: var(--tmdbDarkBlue);

      a {
        color: #fff;
      }
    }
  }
`;

const ImgContainer = styled.div(
  ({ background }) => `
 
  > img {
    width: 100%;
    height: 100%;
    min-height: 17rem; 
    background-color: #dbdbdb;
  }
`
);

const MoreIcon = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.7;
  line-height: inherit;
  background-position: center center;
  background-repeat: no-repeat;
  color: inherit;
  box-sizing: border-box;

  img {
    width: 2rem;
    height: 2rem;
  }

  :hover {
    cursor: pointer;

    img {
      // fill: var(--tmdbLightBlue);
      filter: invert(2%) sepia(100%) saturate(2707%) hue-rotate(120deg)
        brightness(162%) contrast(96%);
    }
  }
`;

const ItemContent = styled.div`
  width: 100%;
  padding: 1.625rem 0.625rem 0.75rem 0.625rem;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
`;

const ItemTitle = styled.h2`
  color: var(--tmdbLightBlue);
  font-weight: 700;

  a {
    text-decoration: none;
    :hover {
      color: var(--tmdbLightBlue);
    }
  }
`;

const ItemDate = styled.p`
  color: #00000099;
  font-size: 0.875rem;
`;

const PopularityIcon = styled.div(({ popularity }) => {
  const percent = parseInt(popularity, 10);

  // 16 is the radius of the circle
  const circumference = 16 * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  const color = `rgb(${percent >= 50 ? 200 - (percent - 50) * 4 : 200}, ${
    percent <= 50 ? 200 - (50 - percent) * 4 : 200
  }, 20)`;

  return `
  position: absolute;
  top: -1.188rem;
  left: 0..625rem;
  z-index: 1;
  border-radius: 50%;
  background-color: #081c22;
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    font-size: 0.8rem !important;
    padding: 0.625rem 0;
    color: #fff;
    text-align: center;
    
    ::after {
      content: '%';
      font-size: 0.6rem;
      color: #fff;
      padding-top: 0.063rem;
      padding-left: 0.063rem;
      position: relative;
      bottom: 0.25rem;
      display: ${percent > 0 ? 'inline-block' : 'none'}
    }
  }

  svg {
    width: 2.125rem !important;
    height: 2.125rem !important;
    width: 2.625rem !important;
    height: 2.625rem !important;
    position: absolute;
    top: -0.125rem;
    left: -0.125rem;
    z-index: 100;

    circle:first-child {
      transition: 0.35s stroke-dashoffset;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      stroke-dashoffset: ${offset};
      stroke-dasharray: ${circumference} ${circumference};
      z-index: 1;
      stroke: ${color};
    }

    circle:nth-child(2) {
      transition: 0.35s stroke-dashoffset;
      transform: rotate(-90deg);
      opacity: 0.5;
      transform-origin: 50% 50%;
      stroke: ${color};
    }
  }
`;
});

const ItemsContainer = styled.div`
  width: inherit;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9.375rem, 1fr));
  gap: 0 2rem;
  justify-items: center;

  @media screen and (max-width: 34rem) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

const MoviePage = styled.div`
  width: 100%;
`;

export {
  MoviePage,
  Item,
  MoreContent,
  MoreContentItem,
  ItemContent,
  ItemTitle,
  ImgContainer,
  ItemDate,
  PopularityIcon,
  ItemsContainer,
  MoreIcon,
};
