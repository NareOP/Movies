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

export { Content, Container, ContainerVertical };
