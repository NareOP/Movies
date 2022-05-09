import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';

const MoviesContext = createContext();
export { MoviesContext };

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  process.env.REACT_APP_API_KEY || '6d8fd34d02fc9cbc871ec10f0bf6c8d1';
const FETCH_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

const MoviesContextProvider = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [filters, setFilters] = useState({ page: 1 });

  const fetchData = async () => {
    let url = FETCH_URL;
    if (filters) {
      Object.keys(filters).map((filter) => {
        url += `&${filter}=${filters[filter]}`;
      });
    }

    try {
      const reponse = await fetch(url);
      const { results } = await reponse.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const results = await fetchData();
      setMovieData((prev) => [...prev, ...results]);
    })();
  }, [filters.page]);

  useEffect(() => {
    (async () => {
      const results = await fetchData();
      setMovieData(results);
    })();
  }, [filters.sort_by]);

  return (
    <MoviesContext.Provider
      value={useMemo(
        () => ({ movies: movieData, setFilters }),
        [movieData, setFilters]
      )}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
