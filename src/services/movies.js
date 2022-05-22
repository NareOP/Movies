const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  process.env.REACT_APP_API_KEY || '6d8fd34d02fc9cbc871ec10f0bf6c8d1';

/**
 * Get endpoint path URL with api_key query param.
 *
 * @param {string} path The path.
 *
 * @return {string} The path URL with api key.
 */
const getPathUrlWithKey = (path) =>
  `${BASE_URL}${path}${path.includes('?') ? '&' : '?'}api_key=${API_KEY}`;

/**
 * Get all movies.
 *
 * @param {number} [page=1] The page number.
 * @param {string} [sortBy=null] The sort value.
 *
 * @return  {Promise<Object>} Movies response.
 */
export const getMovies = async (page = 1, sortBy = null) => {
  const response = await fetch(
    getPathUrlWithKey(
      `/discover/movie?page=${page}${sortBy ? `&sort_by=${sortBy}` : ''}`
    )
  );
  return response.json();
};
export default {
  getMovies,
};
