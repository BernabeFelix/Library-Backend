angular.
module('library')
  .factory('$paginator', ($http) => {
    var self = this;
    self.nextUrl = undefined;
    self.prevUrl = undefined;

    var service = {
      getBooksFilterBy,
      getNextBooks,
      getPageBooks,
      getPrevBooks
    }

    return service;

    // functions
    function getBooksFilterBy(filterText) {
      var url = `api/books?page=1`;
      return $http.get(url, {
        params: {
          filterText
        }
      }).then(handlePaginatorResponse, error => false);
    }

    function getPageBooks(page) {
      var url = `api/books?page=${page}`;
      return $http.get(url).then(handlePaginatorResponse, error => false);
    }

    function getPrevBooks() {
      return $http.get(self.prevUrl).then(handlePaginatorResponse, error => false);
    }

    function getNextBooks(page) {
      var url = self.nextUrl ? self.nextUrl : 'api/books?page=1';
      return $http.get(url).then(handlePaginatorResponse, error => false);
    }

    // utils
    function handlePaginatorResponse({
      data
    }) {
      var {
        current_page, data, last_page, next_page_url, prev_page_url
      } = data;

      self.nextUrl = next_page_url;
      self.prevUrl = prev_page_url;

      return {
        current_page, data, last_page
      };
    }
  });
