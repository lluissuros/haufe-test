//maybe testing action creators like this so simple is not really necessary,
//and the integration test with store is more useful?
import expect from 'expect';
import * as bookActions from './bookActions';
import * as actionTypes from './actionTypes';


describe('Book Actions', () => {
  describe('createBookSuccess', () => {
    it('should create a CREATE_BOOK_SUCCESS action', () => {
      //arrange
      const book = { id: 'clean-code', title:'Clean Code'};
      const expectedAction = {type: actionTypes.CREATE_BOOK_SUCCESS, book};
      //act
      const action = bookActions.createBookSuccess(book);
      //assert
      expect(action).toEqual(expectedAction);
    });

  });
});
