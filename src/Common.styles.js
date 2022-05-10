import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  max-width: var(--maxPrimaryPageWidth);
  width: 100%;
  padding: 0 40px;
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
`;

const Button = styled.div(
  ({ disabled, borderRadius = 'var(--imageBorderRadius)' }) => `
  margin-top: 30px;
  padding: 0;
  max-width: 100%;
  width: 100%;  
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius};
  background: rgba(${disabled ? '228,228,228,0.7' : 'var(--accountLightBlue)'});

  :hover {
    cursor: ${disabled ? 'default' : 'pointer'};
  }

  p {
    color: ${disabled ? 'rgba(0,0,0,0.5)' : '#fff'};

    :hover {
      color: ${disabled ? 'rgba(0,0,0,0.5)' : '#0a1526'};
    }
  }
`
);

export { Content, Container, ContainerVertical, Button };
