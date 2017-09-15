import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as bookActions from '../actions/bookActions';

describe('Store', () => {
  it('Should handle creating one book', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const book = {title : 'Test'};

    //action
    const action = bookActions.createBookSuccess(book);
    store.dispatch(action);

    //assert
    const actual = store.getState().books[0];
    const expected = {title : 'Test'};
    expect(actual).toEqual(expected);
  });
});
