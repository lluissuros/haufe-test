import * as types from './actionTypes';

// I am using action creators here.

export function createBook(book) {
  return {type: types.CREATE_BOOK, book};
}
