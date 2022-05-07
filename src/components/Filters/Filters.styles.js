import styled from 'styled-components';

const FiltersContainer = styled.div`
  margin: 30px 30px 0 0;
`;

const FilterItem = styled.div`
  min-width: 260px;
  width: 260px;
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const FilterContent = styled.div(
  ({ isOpen }) => `
  display: ${isOpen ? 'block' : 'none'};
  width: 100%;  
  border-top: 1px solid #eee;
  padding: 14px 16px 16px 16px;

  > p {
    display: inline-flex;
    align-items: center;
    width: 100%;
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 10px
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
  padding: 14px 16px;

  :hover {
    cursor: pointer;
  }

  span {
    background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg');
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1em;
    min-height: 1em;
    width: 1em;
    height: 1em;
    line-height: inherit;
    transform: ${isOpen && 'rotate(90deg)'};
  }
`
);

const DropdownFilter = styled.div`
  border-radius: 0.25rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0.375rem 0.75rem;
  width: 100%;
  height: calc(1.5em + 0.75rem);
  box-shadow: none;
  color: inherit;
  background: 0 0;
  font: inherit;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 0 1 auto;
  text-overflow: ellipsis;
  cursor: pointer;

  border-color: #e4e7eb;
  color: #212529;
  background-color: #e4e7eb;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  :hover {
    border-color: #c7cdd5;
    background-color: #c7cdd5;
  }

  span:first-child {
    display: inline-flex;
    align-items: center;
    width: 100%;
    font-size: 1em;
    font-weight: 300;
    height: calc(1.5em + 0.75rem);
    text-overflow: ellipsis;
  }
`;

const DropdownFilterBody = styled.div(
  ({ isOpen }) => `
  display: ${isOpen ? 'block' : 'none'};
  position: absolute;
  overflow-y: scroll;
  top: 35px;
  left: 0px;
  border: 1px solid red;
  height: 12em;
  background: #fff;
  width: 100%;
  border: 1px solid #c7cdd5;
  padding: 0.375rem 0;
`
);

const DropdownFilterOption = styled.p`
  margin: 0;
  padding: 0.375rem 0.75rem;
  width: 100%;
  min-width: 0;
  height: calc(1.5em + 0.75rem);
  border: 0;
  outline: 0;
  box-shadow: none;
  color: inherit;
  background: 0 0;
  font: inherit;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 0 1 auto;
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
