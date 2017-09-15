
import expect from 'expect';
import * as bookActions from './bookActions';
import * as actionTypes from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as apiRoutes from '../api/apiRoutes';


describe('Book Actions', () => {
  //maybe testing action creators like this so simple is not really necessary,
  //and the integration test with store is more useful?
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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_BOOKS_SUCCESS when loading books', (done) => {
    nock(apiRoutes.SERVER_URL)
      .get('/Books')
      .reply(200, { body: [{ id: 1, title: 'Test'} ]} );

    const expectedActions = [
      {type: actionTypes.BEGIN_AJAX_CALL},
      {type: actionTypes.LOAD_BOOKS_SUCCESS, body: [{ id: 1, title: 'Test'} ]}
    ];

    const initialState = { books: [] };
    const store = mockStore(initialState, expectedActions);

    store.dispatch(bookActions.loadBooks()).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);
      expect(actions[0].type).toEqual(actionTypes.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(actionTypes.LOAD_BOOKS_SUCCESS);
      done();
    });
  });
});
