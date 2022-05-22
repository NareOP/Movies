import styled from 'styled-components';

const Main = styled.main`
  wdith: 100%;
  padding: 2rem 0;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    align-items: felx-start;
  }
`;

const Title = styled.h2`
  width: 100%;
  margin-bottom: 1.25rem;
  font-size: 1.6rem;
`;

export { Main, Title };
