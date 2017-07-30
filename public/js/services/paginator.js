angular.
module('library')
  .factory('$paginator', ($http) => {
    var self = this;
    self.nextUrl = undefined;
    self.prevUrl = undefined;

    var service = {
      getNextBooks
    }
    return service;
    // functions
    function functionName() {

    }

    function getNextBooks() {
      var url = self.nextUrl ? self.nextUrl : 'api/books/';
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
