angular
  .module('library')
  .factory('$categories', ($http) => {
    var service = {
      getAllCategories
    }

    return service;

    // functions
    function getAllCategories() {
      return $http.get('/api/categories/')
        .then(
          response => response.data,
          error => []
        )
    }
  });
