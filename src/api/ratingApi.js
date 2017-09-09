import * as apiRoutes from './apiRoutes';

class RatingApi {
  static getAllRatings() {
    return fetch(apiRoutes.RATINGS)
      .then(response => response.json())
      .catch(error => {
        throw(error);
      });
  }
}

export default RatingApi;
