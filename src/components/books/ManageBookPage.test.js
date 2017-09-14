import expect from 'expect';
import React from 'react';
import { mount, shallow} from 'enzyme';
import { ManageBookPage } from './ManageBookPage';

describe('Manage Book Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      ratings: [],
      book: {id:'', title:'', author:'', buyHref:'', description:''},
      actions: {
        saveBook: () => Promise.resolve(),
      } //mock
    };
    const wrapper = mount(<ManageBookPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
  });

  it('does not set error message when trying to save correct title', () => {
    const props = {
      ratings: [],
      book: {id:'', title:'Title long enough', author:'', buyHref:'', description:''},
      actions: {
        saveBook: () => Promise.resolve(),
      } //mock
    };
    const wrapper = mount(<ManageBookPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe(undefined);
  });
});
