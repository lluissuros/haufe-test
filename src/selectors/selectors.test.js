import expect from 'expect';
import { ratingsFormattedForDropdown } from './selectors';

describe('Rating selectors', () => {
  describe('ratingsFormattedForDropdown', () => {
    it('should return data formatted for drodown', () => {
      const ratings = [
        { id: 'bad', text: 'bad'},
        { id: 'good', text: 'good'},
        { id: 'awesome', text: 'awesome'}];
      const expected = [
        { value: 'bad', text: 'bad'},
        { value: 'good', text: 'good'},
        { value: 'awesome', text: 'awesome'}];

      expect(ratingsFormattedForDropdown(ratings)).toEqual(expected);
    });
  });
});
