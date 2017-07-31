angular
  .module('library')
  .factory('$books', ($http, $paginator) => {
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
      published_at = `${published_at}-01-01`;

      return $http.post(`/api/books`, {
          author,
          category_id,
          name,
          published_at,
          user: ''
        })
        .then(
          response => {
            return $paginator.getPageBooks(1);
          },
          error => false
        )
    }

    function deleteBook(id) {
      return $http.delete(`/api/books/${id}`)
        .then(
          response => {
            return $paginator.getPageBooks(1);
          },
          error => false
        )
    }

    function editBook(id, data) {
      var {
        author, category_id, name, published_at, user
      } = data;
      // return month/day
      published_at = `${published_at}-01-01`;

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
