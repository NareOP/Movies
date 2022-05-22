import styled from 'styled-components';

const FiltersContainer = styled.div`
  margin: 1.875rem 1.875rem 0 0;

  @media screen and (max-width: 25.75rem) {
    margin-right: 0;
  }
`;

const FilterItem = styled.div`
  min-width: 16.25rem;
  width: 16.25rem;
  border: 0.063rem solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 0 0.125rem 0.5rem #0000001a;
  width: 100%;
`;

const FilterContent = styled.div(
  ({ isOpen }) => `
  display: ${isOpen ? 'block' : 'none'};
  width: 100%;  
  border-top: 0.063rem solid #eee;
  padding: 1rem;
  padding-top: 0.875rem;

  > p {
    display: inline-flex;
    align-items: center;
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.625rem;
  }
`
);

const FilterTitle = styled.div(
  ({ isOpen }) => `
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0.875rem 1rem;

  :hover {
    cursor: pointer;
  }

  img {
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    min-height: 1rem;
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: inherit;
    transform: ${isOpen && 'rotate(90deg)'};
  }
`
);

const DropdownFilter = styled.div`
  width: 100%;
  height: calc(1.5rem + 0.75rem);
  margin: 0;
  padding: 0.375rem 0.75rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  box-shadow: none;
  cursor: pointer;
  border-radius: 0.25rem;
  border-width: 0.063rem;
  border-color: #e4e7eb;
  color: #212529;
  background-color: #e4e7eb;
  z-index: 1;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  :hover {
    border-color: #c7cdd5;
    background-color: #c7cdd5;
  }

  span:first-child {
    width: 100%;
    height: calc(1.5rem + 0.75rem);
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 300;
    text-overflow: ellipsis;
  }
`;

const DropdownFilterBody = styled.div(
  ({ isOpen }) => `
  display: ${isOpen ? 'block' : 'none'};
  height: 12rem;
  width: 100%;
  padding: 0.375rem 0;
  position: absolute;
  top: 2.188rem;
  left: 0rem;
  overflow-y: scroll;
  background: #fff;
  border: 0.063rem solid #c7cdd5;
`
);

const DropdownFilterOption = styled.p`
  padding: 0.375rem 0.75rem;
  width: 100%;
  height: calc(1.5em + 0.75rem);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-overflow: ellipsis;
  font-size: 0.9em;
  font-weight: 400;
`;

export {
  FiltersContainer,
  FilterItem,
  FilterTitle,
  FilterContent,
  DropdownFilter,
  DropdownFilterBody,
  DropdownFilterOption,
};
