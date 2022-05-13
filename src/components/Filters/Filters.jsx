import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { MoviesContext } from 'MoviesContext';
import { Button } from 'Common.styles';
import {
  FiltersContainer,
  FilterItem,
  FilterTitle,
  FilterContent,
  DropdownFilter,
  DropdownFilterBody,
  DropdownFilterOption,
} from './Filters.styles';

const sortingFilters = [
  {
    id: 1,
    value: 'popularity.desc',
    name: 'Popularity Descending',
  },
  {
    id: 2,
    value: 'popularity.asc',
    name: 'Popularity Ascending',
  },
  {
    id: 3,
    value: 'release_date.desc',
    name: 'Release Date Descending',
  },
  {
    id: 4,
    value: 'release_date.asc',
    name: 'Release Date Ascending',
  },
  {
    id: 5,
    value: 'original_title.desc',
    name: 'Title (Z-A)',
  },
  {
    id: 6,
    value: 'original_title.asc',
    name: 'Title (A-Z)',
  },
  {
    id: 7,
    value: 'vote_average.desc',
    name: 'Rating Descending',
  },
  {
    id: 8,
    value: 'vote_average.asc',
    name: 'Rating Ascending',
  },
];

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    sortingFilters[0]
  );
  const { setFilters, applyFilters, setAutoLoadPage } =
    useContext(MoviesContext);

  useEffect(() => {
    setAutoLoadPage(false);
    setFilters((prev) => ({
      ...prev,
      page: 1,
      sort_by: selectedFilterOption.value,
    }));
  }, [selectedFilterOption]);

  return (
    <FiltersContainer>
      <FilterItem>
        <FilterTitle
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}>
          <p>Sort</p>
          <span />
        </FilterTitle>
        <FilterContent isOpen={isOpen}>
          <p>Sort Results By</p>
          <DropdownFilter onClick={() => setIsSortMenuOpen((prev) => !prev)}>
            <span>{selectedFilterOption.name}</span>
            <FontAwesomeIcon icon={faCaretDown} />
            <DropdownFilterBody isOpen={isSortMenuOpen}>
              {sortingFilters.map((item) => (
                <DropdownFilterOption
                  key={item.id}
                  value={item.value}
                  onClick={() => {
                    setSelectedFilterOption(item);
                    setIsSearchButtonDisabled(false);
                  }}>
                  {item.name}
                </DropdownFilterOption>
              ))}
            </DropdownFilterBody>
          </DropdownFilter>
        </FilterContent>
      </FilterItem>
      <Button
        disabled={isSearchButtonDisabled}
        borderRadius='20px'
        onClick={async () => {
          await applyFilters();
          setIsSearchButtonDisabled(true);
        }}>
        <p>Search</p>
      </Button>
    </FiltersContainer>
  );
};

Filters.propTypes = {};

Filters.defaultProps = {};

export default Filters;
