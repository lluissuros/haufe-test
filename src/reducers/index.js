import { combineReducers } from 'redux';
import books from './bookReducer';
import ratings from './ratingReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  books,
  ratings,
  ajaxCallsInProgress,
});

export default rootReducer;
