import expect from 'expect';
import bookReducer from './bookReducer';
import * as actions from '../actions/bookActions';


actions.createBookSuccess({});

describe('Book Reducer', () => {
  it('should add course when passed CREATE_BOOK_SUCCESS action', () => {
    //arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'},
    ];
    const newBook = {title: 'test'};
    const action = actions.createBookSuccess(newBook);

    //act
    const newState = bookReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('test');
    expect(newState[newState.length - 1]).toEqual(newBook);
  });

  it('should update course when passed UPDATE_BOOK_SUCCESS action', () => {
    //arrange
    const initialState = [
      {id: 1, title: 'A'},
      {id: 2, title: 'B'},
      {id: 3, title: 'C'},
    ];
    const book = {id: 2, title: 'test'};
    const action = actions.updateBookSuccess(book);

    //act
    const newState = bookReducer(initialState, action);
    const updatedBook = newState.find((el) => el.id === book.id);
    const untouchedBooks = newState.filter((el) => el.id !== book.id);

    //assert
    expect(newState.length).toEqual(3);
    expect(updatedBook).toEqual(book);
    expect(untouchedBooks.length).toEqual(2);
    expect(untouchedBooks[0]).toEqual({id: 1, title: 'A'});
    expect(untouchedBooks[1]).toEqual({id: 3, title: 'C'});
  });
});
