import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Filters from 'components/Filters/Filters';
import MoviesList from 'components/MoviesList/MoviesList';
import GlobalStyles, { Main, Title } from 'App.styles';
import { ContainerVertical, Content } from 'Common.styles';
import MoviesContextProvider from 'MoviesContext';

const App = () => (
  <div className='App'>
    <GlobalStyles />
    <Header />
    <Main>
      <MoviesContextProvider>
        <ContainerVertical>
          <Title>Popular TV Shows</Title>
          <Content>
            <Filters />
            <MoviesList />
          </Content>
        </ContainerVertical>
      </MoviesContextProvider>
    </Main>
    <Footer />
  </div>
);

export default App;
