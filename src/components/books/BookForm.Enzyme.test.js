import expect from 'expect';
import React from 'react';
import { mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import BookForm from './BookForm';

function setup(saving = false) {
  const props = {
    book: {}, saving: saving, errors: {}, allRatings:[],
    onSave: () => {},
    onChange: () => {},
  };

  return shallow(<BookForm {...props}/>);
}

describe('BookForm via Enzyme', () => {
  it('renders one form', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
  });
  it('form first child is h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Book');
  });
  it('save button is labeled Save when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });
  it('save button is labeled Saving... when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
