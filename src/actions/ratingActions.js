import * as types from './actionTypes';
import RatingApi from '../api/mockRatingApi';

// I am using action creators here.

export function loadRatingsSuccess(ratings) {
  return {type: types.LOAD_RATINGS_SUCCESS, ratings};
}

export function loadRatings() {
  return function(dispatch) {
    // TODO: import real api instead of mock.
    return RatingApi.getAllRatings().then(ratings => {
      dispatch(loadRatingsSuccess(ratings));
    }).catch(error => {
      throw(error);
    });
  };
}
