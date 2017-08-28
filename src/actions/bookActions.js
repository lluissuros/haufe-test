import * as types from './actionTypes';
import bookApi from '../api/mockBookApi';

// I am using action creators here.

export function loadBooksSuccess(books) {
  return {type: types.LOAD_BOOKS_SUCCESS, books};
}

export function loadBooks() {
  return function(dispatch) {
    // TODO: import real api instead of mock.
    return bookApi.getAllBooks().then(books => {
      dispatch(loadBooksSuccess(books));
    }).catch(error => {
      // TODO: nice handling of errors
      throw(error);
    });
  };
}
