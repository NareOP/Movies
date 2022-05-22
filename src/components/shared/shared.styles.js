import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: var(--maxPrimaryPageWidth);
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;

  max-width: var(--maxPrimaryPageWidth);
  width: 100%;
  padding: 0 2.5rem;
  box-sizing: border-box !important;
  align-items: center;
`;

const ContainerVertical = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 34rem) {
    flex-direction: column !important;
  }
`;

const Button = styled.button(
  ({ disabled, borderRadius = 'var(--imageBorderRadius)' }) => `
  margin-top: 1.875rem;
  padding: 0;
  max-width: 100%;
  width: 100%;  
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius};
  background: ${disabled ? '#e4e4e4B3' : 'var(--accountLightBlue)'};

  :hover {
    cursor: ${disabled ? 'default' : 'pointer'};
  }

  p {
    color: ${disabled ? '#00000080' : '#fff'};

    :hover {
      color: ${disabled ? '#00000080' : '#0a1526'};
    }
  }
`
);

const Icon = styled.div(
  ({ white }) => `
  min-width: 1.5rem;
  min-height: 1.5rem;
  justify-content: center;
  align-content: center;
  display: flex;
  
  ${
    white &&
    `img {
      filter: invert(1);
    }`
  }

  :hover {
    cursor: pointer;
  }
`
);

export { Content, Container, ContainerVertical, Button, Icon };
