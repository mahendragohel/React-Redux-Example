import { createSelector } from 'reselect';

export default class Selectors {
  sliceSelector = state => state;

  getCountSelector = createSelector(
    this.sliceSelector,
    slice => {
      return slice && slice.count;
    }
  );
}
