import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { getMovies } from 'services/movies';

// context to share data realted to movies
const MoviesContext = createContext();
export { MoviesContext };

/**
 * Creates context provider to serve as a one source of shared data between different components on different levels
 *
 * @param {node} children
 * @return {contextProvider} Context provider containing the children with shared data
 */
function MoviesContextProvider({ children }) {
  const [movieData, setMovieData] = useState([]);
  const [filters, setFilters] = useState({ page: 1 });
  const [autoLoadPage, setAutoLoadPage] = useState(false);

  /**
   * Calls movies service to get data with specified filters
   *
   * @return {array} Movie item object's list, deafult return value is []
   */
  const fetchData = async () => {
    try {
      const { results } = await getMovies(filters.page, filters.sortBy);
      return results;
    } catch (error) {
      console.log(error);
    }

    return [];
  };

  // fetch and set movie data based on filters
  const applyFilters = async () => {
    const results = await fetchData();
    setMovieData(results);
  };

  // this is to prevent dual useEffect calling in development mode, may be removed in production mode
  const initialRender = useRef(false);

  // trigger page change and load data to push add in movie list
  useEffect(() => {
    if (initialRender.current) {
      (async () => {
        const results = await fetchData();
        setMovieData((prev) => [...prev, ...results]);
      })();
    } else {
      initialRender.current = true;
    }
  }, [filters.page]);

  return (
    <MoviesContext.Provider
      value={useMemo(
        () => ({
          movies: movieData,
          setFilters,
          applyFilters,
          autoLoadPage,
          setAutoLoadPage,
        }),
        [movieData, setFilters, applyFilters, autoLoadPage, setAutoLoadPage]
      )}>
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;

MoviesContextProvider.propTypes = {
  children: PropTypes.node,
};

MoviesContextProvider.defaultProps = {
  children: null,
};
