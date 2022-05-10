import React, { useContext, useState, useEffect, useRef } from 'react';
import { MoviesContext } from 'MoviesContext';
import {
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
} from './MoviesList.styles';
import { Button } from 'Common.styles';

const MoviesList = () => {
  const { movies, setFilters, autoLoadPage, setAutoLoadPage } =
    useContext(MoviesContext);
  const ref = useRef();
  const refPlaceholder = useRef();
  const [showMore, setShowMore] = useState({
    value: false,
    elementId: 0,
    ref,
  });

  const customizeDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString).toDateString();
    const [weekday, month, day, year] = date.split(' ');
    return ''.concat(month, ' ', day, ', ', year);
  };

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom && autoLoadPage) {
      setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    function handleClickOutside(event) {
      const { ref } = showMore;

      if (ref.current && !ref.current.contains(event.target)) {
        setShowMore((prev) => ({
          ...prev,
          value: false,
          elementId: 0,
        }));
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowMore.ref]);

  return (
    <MoviePage>
      <ItemsContainer>
        {movies.map((item) => {
          item.showMore = false;
          return (
            <Item
              key={item.id}
              details={item}
              showMore={item.id == showMore.elementId && showMore.value}>
              <MoreContent
                ref={
                  (item.id == showMore.elementId && showMore.ref) ||
                  refPlaceholder
                }>
                <MoreContentItem>
                  <p>Want to rate or add this item to a list?</p>
                  <p>
                    <a href=''>Login</a> <span></span>
                  </p>
                </MoreContentItem>
                <MoreContentItem>
                  <p>Not a member?</p>
                  <p>
                    <a href=''>Sign up and join the community </a> <span></span>
                  </p>
                </MoreContentItem>
              </MoreContent>
              <ImgContainer background={item.backdrop_path}>
                <img />
                <MoreIcon
                  onClick={() => {
                    setShowMore((prev) => ({
                      ...prev,
                      value: item.id == prev.elementId ? !prev.value : true,
                      elementId: item.id,
                    }));
                  }}>
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
          );
        })}
      </ItemsContainer>

      <Button
        onClick={() => {
          setAutoLoadPage(true);
          setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
        }}>
        <p>Load More</p>
      </Button>
    </MoviePage>
  );
};

MoviesList.propTypes = {};

MoviesList.defaultProps = {};

export default MoviesList;
