import * as types from './actionTypes';
//import BookApi from '../api/mockBookApi';
import BookApi from '../api/bookApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

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

export function deleteBookSuccess(book) {
  return {type: types.DELETE_BOOK_SUCCESS, book};
}

export function loadBooks() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return BookApi.getAllBooks()
      .then(books => dispatch(loadBooksSuccess(books)))
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}

export function saveBook(bookToSave) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return BookApi.saveBook(bookToSave)
      .then(book => {
        bookToSave.id
          ? dispatch(updateBookSuccess(book))
          : dispatch(createBookSuccess(book));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}

export function deleteBook(bookToDelete) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return BookApi.deleteBook(bookToDelete.id)
      .then(book => {
          dispatch(deleteBookSuccess(book));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
