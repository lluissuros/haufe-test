import expect from 'expect';
import React from 'react';
import { mount, shallow} from 'enzyme';
import { BooksPage } from './BooksPage';

describe('Book Page', () => {
  it('does not show BookList if books is empty', () => {
    const props = {
      books: [],
      actions: {
      } //mock
    };
    const wrapper = shallow(<BooksPage {...props}/>);
    expect(wrapper.find('BookList').length).toBe(0);
  });

  it('show BookList if has books', () => {
    const props = {
      books: [{id:'', title:'', author:'', buyHref:'', description:''}],
      actions: {
      } //mock
    };
    const wrapper = shallow(<BooksPage {...props}/>);
    expect(wrapper.find('BookList').length).toBe(1);
  });
});
