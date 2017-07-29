angular
  .module('library')
  .factory('$books', ($http) => {
    var service = {
      getAllBooks
    }

    return service;

    // functions
    function getAllBooks() {
      return $http.get('/api/books/')
        .then(
          response => response.data,
          error => []
        )
    }
  });
