import delay from './delay';
import shortid from 'shortid';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const ratings = [
  {
    id: 'bad',
    text: 'bad',
  },
  {
    id: 'good',
    text: 'good',
  },
  {
    id: 'awesome',
    text: 'awesome',
  },
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () =>  shortid.generate();

class RatingApi {
  static getAllRatings() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], ratings));
      }, delay);
    });
  }

}

export default RatingApi;
