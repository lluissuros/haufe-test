import * as types from './actionTypes';
import BookApi from '../api/mockBookApi';
import {beginAjaxCall} from './ajaxStatusActions';

// I am using action creators here.

export function loadBooksSuccess(books) {
  return {type: types.LOAD_BOOKS_SUCCESS, books};
}

export function createBookSuccess(book) {
  return {type: types.CREATE_BOOK_SUCCESS, book};
}

export function updateBookSuccess(book) {
  return {type: types.UPDATE_BOOK_SUCCESS, book};
}

export function loadBooks() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    // TODO: import real api instead of mock.
    return BookApi.getAllBooks().then(books => {
      dispatch(loadBooksSuccess(books));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveBook(book) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return BookApi.saveBook(book).then(book => {
      book.id ? dispatch(updateBookSuccess(book)) : dispatch(createBookSuccess(book));
    }).catch(error => {
      throw(error);
    });
  };
}
