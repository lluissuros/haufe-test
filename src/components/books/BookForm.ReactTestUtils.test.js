import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import BookForm from './BookForm';

function setup(saving=false) {
  const props = {
    book: {}, saving: saving, errors: {}, allRatings:[],
    onSave: () => {},
    onChange: () => {},
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<BookForm {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('BookForm via React Test  Utils', () => {
  it('renders form', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
  });
  it('form first child is h1', () => {
    const { output } = setup();
    const [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });
  it('save button is labeled Save when not saving', () => {
    const { output } = setup(false);
    const saveButton = output.props.children[7];
    expect(saveButton.props.value).toBe('Save');
  });
  it('save button is labeled Saving... when saving', () => {
    const { output } = setup(true);
    const saveButton = output.props.children[7];
    expect(saveButton.props.value).toBe('Saving...');
  });
});
