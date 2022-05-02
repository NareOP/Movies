import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Filters from 'components/Filters/Filters';
import MoviesList from 'components/MoviesList/MoviesList';
import GlobalStyles from './App.styles';

const App = () => (
  <div className='App'>
    <GlobalStyles />
    <Header />
    {/* <main>
      <Filters />
      <MoviesList />
    </main>
    <Footer /> */}
  </div>
);

export default App;
