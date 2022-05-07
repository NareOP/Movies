import React, { useContext } from 'react';
import { MoviesContext } from 'MoviesContext';
import {
  MoviePage,
  Item,
  ItemContent,
  ItemTitle,
  ImgContainer,
  ItemDate,
  PopularityIcon,
  ItemsContainer,
  MoreIcon,
  LoadMoreButton,
} from './MoviesList.styles';

const MoviesList = () => {
  const { movies, setFilters } = useContext(MoviesContext);

  const customizeDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString).toDateString();
    const [weekday, month, day, year] = date.split(' ');
    return ''.concat(month, ' ', day, ', ', year);
  };

  return (
    <MoviePage>
      <ItemsContainer>
        {movies.map((item) => (
          <Item
            key={item.id}
            details={item}>
            <ImgContainer background={item.backdrop_path}>
              <img />
              <MoreIcon>
                <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg' />
              </MoreIcon>
            </ImgContainer>
            <ItemContent>
              <PopularityIcon popularity={item.vote_average * 10}>
                <div>{item.vote_average * 10 || 'NR'}</div>
                <svg>
                  <circle
                    strokeWidth='2'
                    fill='transparent'
                    r='16'
                    cx='50%'
                    cy='50%'
                  />
                  <circle
                    strokeWidth='2'
                    fill='transparent'
                    r='16'
                    cx='50%'
                    cy='50%'
                  />
                </svg>
              </PopularityIcon>
              <ItemTitle>
                <a
                  href='#'
                  title={item.title}>
                  {item.title}
                </a>
              </ItemTitle>
              <ItemDate>{customizeDate(item.release_date)}</ItemDate>
            </ItemContent>
          </Item>
        ))}
      </ItemsContainer>

      <LoadMoreButton
        onClick={() =>
          setFilters((prev) => ({ ...prev, page: prev.page + 1 }))
        }>
        <p>Load More</p>
      </LoadMoreButton>
    </MoviePage>
  );
};

MoviesList.propTypes = {};

MoviesList.defaultProps = {};

export default MoviesList;
