import styled from 'styled-components';

const MoreContent = styled.div`
  background-color: #fff;
  color: #000;
  border: 1px solid rgba(33, 37, 41, 0.15);
  position: absolute;
  display: flex;
  opacity: 1;
  width: 19em;
  overflow: visible;
  align-self: stretch;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 42px;
  left: 20px;
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
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  margin-top: 30px;
  max-width: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &::before {
    display: ${showMore ? 'inline-block' : 'none'};
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
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
  border-top: 1px solid rgba(33, 37, 41, 0.15);
  padding: 4px 0;

  p {
    padding: 6px 20px;
    font-size: 0.9em;
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
      color: rgba(0, 0, 0, 0.6);
      background-color: transparent;
      text-decoration: none;
    }

    span {
      background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-blue-6094fd9f49010170582ba069ce10c999c8fc78f107339d86ac363f12e3b6a927.svg');
      top: 2px;
      margin-left: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1em;
      height: 1em;
    }

    &:hover {
      background: rgba(var(--tmdbDarkBlue), 1);

      a {
        color: #fff;
      }

      span {
        background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-white-a4e5bbaf210868cf7b5f16df5a4382100c675c90623f4e55ef9c7ff9b3dc2e21.svg');
      }
    }
  }
`;

const ImgContainer = styled.div(
  ({ background }) => `
 
  > img {
    width: 100%;
    height: 100%;
    min-height: 17em; 
    background-color: #dbdbdb;
    content: url(${
      background
        ? `https://image.tmdb.org/t/p/w220_and_h330_face${background}`
        : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
    });
  }
`
);

const MoreIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  opacity: 0.7;
  line-height: inherit;
  background-position: center center;
  background-repeat: no-repeat;
  color: inherit;
  box-sizing: border-box;

  img {
    width: 2em;
    height: 2em;
  }

  :hover {
    cursor: pointer;

    img {
      // fill: rgba(var(--tmdbLightBlue), 1);
      filter: invert(2%) sepia(100%) saturate(2707%) hue-rotate(120deg)
        brightness(162%) contrast(96%);
    }
  }
`;

const ItemContent = styled.div`
  width: 100%;
  padding: 26px 10px 12px 10px;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
`;

const ItemTitle = styled.h2`
  color: rgba(var(--tmdbLightBlue), 1);
  font-weight: 700;

  a {
    text-decoration: none;
    :hover {
      color: rgba(var(--tmdbLightBlue), 1);
    }
  }
`;

const ItemDate = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
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
  top: -19px;
  left: 10px;
  z-index: 1;
  border-radius: 50%;
  background-color: #081c22;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    font-size: 0.8em !important;
    padding: 10px 0;
    color: #fff;
    text-align: center;
    
    ::after {
      content: '%';
      font-size: 0.6em;
      color: #fff;
      padding-top: 1px;
      padding-left: 1px;
      position: relative;
      bottom: 5px;
      display: ${percent > 0 ? 'inline-block' : 'none'}
    }
  }

  svg {
    width: 34px !important;
    height: 34px !important;
    width: 42px !important;
    height: 42px !important;
    position: absolute;
    top: -2px;
    left: -2px;
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
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0 2em;
  justify-items: center;
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
