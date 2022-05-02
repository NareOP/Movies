import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Filters from 'components/Filters/Filters';
import MoviesList from 'components/MoviesList/MoviesList';

const App = () => (
  <div className='App'>
    <Header />
    <main>
      <Filters />
      <MoviesList />
    </main>
    <Footer />
  </div>
);

export default App;
