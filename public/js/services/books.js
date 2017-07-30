angular
  .module('library')
  .factory('$books', ($http) => {
    var service = {
      deleteBook,
      editBook,
      getAllBooks
    }

    return service;

    // functions
    function deleteBook(id) {
      return $http.delete(`/api/books/${id}`)
        .then(
          response => true,
          error => false
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

    function getAllBooks() {
      return $http.get('/api/books/')
        .then(
          response => response.data,
          error => []
        )
    }

  });
