angular
  .module('library')
  .factory('$books', ($http) => {
    var service = {
      editBook,
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

    function editBook(id, data) {
      var {
        author, category_id, name, published_at, user
      } = data;

      return $http.patch(`/api/books/${id}`, {
          author,
          category_id,
          name,
          published_at,
          user
        })
        .then(
          response => true,
          error => false
        )
    }
  });
