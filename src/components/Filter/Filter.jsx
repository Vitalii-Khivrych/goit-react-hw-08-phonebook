import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </FilterLabel>
  );
}
