import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { MoviesContext } from 'contexts/movies-context';
import { Button } from 'components/shared/shared.styles';
import arrowRight from 'assets/arrow-right.svg';
import {
  FiltersContainer,
  FilterItem,
  FilterTitle,
  FilterContent,
  DropdownFilter,
  DropdownFilterBody,
  DropdownFilterOption,
} from './filters.styles';

/**
 * Filters' parameters
 */
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

/**
 * Construct Filter components and trigger changes
 *
 * @return {component} Filter component to show existing filters
 */
function Filters() {
  // SortBy filter menu open status
  const [isOpen, setIsOpen] = useState(false);
  // SortBy nested menu open status
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  // Search Button disable status
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);
  // Selected sortBy filter
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    sortingFilters[0]
  );
  const { setFilters, applyFilters, setAutoLoadPage } =
    useContext(MoviesContext);

  // Updates sortBy filter
  useEffect(() => {
    setAutoLoadPage(false);
    setFilters((prev) => ({
      ...prev,
      page: 1,
      sortBy: selectedFilterOption.value,
    }));
  }, [selectedFilterOption]);

  /**
   * Create filters component
   *
   * @return {component} Filters component with nested sortBy filter
   */
  return (
    <FiltersContainer>
      <FilterItem>
        <FilterTitle
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}>
          <p>Sort</p>
          <img
            src={arrowRight}
            alt=''
          />
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
                    // save chosen filter an enable search button
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
        borderRadius='1.25rem'
        onClick={async () => {
          // fetch data with chosen filters and disable the search button
          await applyFilters();
          setIsSearchButtonDisabled(true);
        }}>
        <p>Search</p>
      </Button>
    </FiltersContainer>
  );
}

Filters.propTypes = {};

Filters.defaultProps = {};

export default Filters;
