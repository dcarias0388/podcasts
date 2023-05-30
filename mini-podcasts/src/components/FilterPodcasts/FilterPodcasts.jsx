import React from 'react';
import PropTypes from 'prop-types';

// styles
import {FilterContainer, FilterNum} from './FilterPodcasts.styles';

const FilterPodcasts = ({filter, podcasts, onChange}) => {
  return (
    <FilterContainer>
      <FilterNum>{podcasts?.length}</FilterNum>
      <input value={filter} type='search' placeholder='Filter podcasts...' name='filterpodcasts' onChange={onChange}/>
    </FilterContainer>
  )
}

FilterPodcasts.propTypes = {
  filter: PropTypes.string,
  podcasts: PropTypes.array,
  onChange: PropTypes.func,
};

export default FilterPodcasts;
