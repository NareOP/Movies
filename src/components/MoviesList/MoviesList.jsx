import React, { useContext, useState, useEffect, useRef } from 'react';
import { MoviesContext } from 'contexts/movies-context';
import { Button } from 'components/shared/shared.styles';
import arrowRightBlue from 'assets/arrow-right-blue.svg';
import arrowRightWhite from 'assets/right-arrow-white.svg';
import placeholder from 'assets/placeholder.svg';
import more from 'assets/more.svg';
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
} from './movies-list.styles';

/**
 * Create movies' list
 *
 * @return {omponent} MovieList component containing Movie components
 */
function MoviesList() {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face';

  const { movies, setFilters, autoLoadPage, setAutoLoadPage } =
    useContext(MoviesContext);
  // keep current pop-up menu on every movie item
  const ref = useRef();
  // placeholder for the ref to prevent errors of null ref in rendering
  const refPlaceholder = useRef();
  const [isLoginOnHover, setIsLoginOnHover] = useState(false);
  // keeps the movie details of the movie item which pop-up menu is open
  const [showMore, setShowMore] = useState({
    value: false,
    elementId: 0,
    ref,
  });

  // date format to "mm dd, yyyy" string
  const customizeDate = (dateString) => {
    if (!dateString) return '';
    let date = new Date(dateString).toDateString();
    date = date.split(' ');
    date.pop();
    const [month, day, year] = date;
    return ''.concat(month, ' ', day, ', ', year);
  };

  // on scroll automatically load data once "load more" button is clicked
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom && autoLoadPage) {
      setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  // handle scroll event in the document
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // close the pop-up menu of movie item when the mouse is clicked outside the pop-up
  useEffect(() => {
    function handleClickOutside(event) {
      // checks if the click is outside the element
      if (
        showMore.ref.current &&
        !showMore.ref.current.contains(event.target)
      ) {
        // initialize the state of current pop-up menu
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

  /**
   * Create movies list
   *
   * @return {component} movie list which has movie items with detailed data
   */
  return (
    <MoviePage>
      <ItemsContainer>
        {movies.map((item) => (
          // render movie item working with pop-up menu
          <Item
            key={item.id}
            details={item}
            showMore={item.id === showMore.elementId && showMore.value}>
            <MoreContent
              ref={
                (item.id === showMore.elementId && showMore.ref) ||
                refPlaceholder
              }>
              <MoreContentItem>
                <p>Want to rate or add this item to a list?</p>
                <p
                  onMouseOver={() => setIsLoginOnHover((prev) => !prev)}
                  onFocus={() => setIsLoginOnHover((prev) => !prev)}
                  onMouseOut={() => setIsLoginOnHover((prev) => !prev)}
                  onBlur={() => setIsLoginOnHover((prev) => !prev)}>
                  <a href='/#'>Login</a>{' '}
                  <img
                    src={isLoginOnHover ? arrowRightWhite : arrowRightBlue}
                    alt='go'
                  />
                </p>
              </MoreContentItem>
              <MoreContentItem>
                <p>Not a member?</p>
                <p>
                  <a href='/#'>Sign up and join the community </a> <span />
                </p>
              </MoreContentItem>
            </MoreContent>
            <ImgContainer background={item.backdrop_path}>
              <img
                src={
                  item.backdrop_path
                    ? IMAGE_BASE_URL + item.backdrop_path
                    : placeholder
                }
                alt=''
              />
              <MoreIcon
                onClick={() => {
                  // keeps the current open pop-up menu
                  setShowMore((prev) => ({
                    ...prev,
                    value: item.id === prev.elementId ? !prev.value : true,
                    elementId: item.id,
                  }));
                }}>
                <img
                  src={more}
                  alt=''
                />
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
                  href='/#'
                  title={item.title}>
                  {item.title}
                </a>
              </ItemTitle>
              <ItemDate>{customizeDate(item.release_date)}</ItemDate>
            </ItemContent>
          </Item>
        ))}
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
}

MoviesList.propTypes = {};

MoviesList.defaultProps = {};

export default MoviesList;
