import * as types from './actionTypes';
import RatingApi from '../api/ratingApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// I am using action creators here.

export function loadRatingsSuccess(ratings) {
  return {type: types.LOAD_RATINGS_SUCCESS, ratings};
}

export function loadRatings() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return RatingApi.getAllRatings()
    .then(ratings => dispatch(loadRatingsSuccess(ratings)))
    .catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
