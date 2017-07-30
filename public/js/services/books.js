angular
  .module('library')
  .factory('$books', ($http) => {
    var service = {
      createBook,
      deleteBook,
      editBook
    }

    return service;

    // functions
    function createBook({
      author, category_id, name, published_at
    }) {
      return $http.post(`/api/books/`, {
          author,
          category_id,
          name,
          published_at,
          user: ''
        })
        .then(
          response => true,
          error => false
        )
    }

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
  });
