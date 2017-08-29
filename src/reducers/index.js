import { combineReducers } from 'redux';
import books from './bookReducer';
import ratings from './ratingReducer';

const rootReducer = combineReducers({
  books,
  ratings,
});

export default rootReducer;
