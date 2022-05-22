import React from 'react';
import GlobalStyles from 'styles/global-styles';
import { Main, Title } from 'app';
import { ContainerVertical, Content } from 'components/shared/shared.styles';
import MoviesContextProvider from 'contexts/movies-context';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Filters from 'components/Filters/Filters';
import MoviesList from 'components/MoviesList/MoviesList';

/**
 * Creates App component configured with globalstyles and main elements of the page
 *
 * @returns {component} App component including the components of the page
 */
function App() {
  return (
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
}

export default App;
