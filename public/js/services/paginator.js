angular.
module('library')
  .factory('$paginator', ($http) => {
    var self = this;
    self.currentPage = undefined;
    self.currentPage = undefined;
    self.nextUrl = undefined;

    var service = {
      getNextBooks
    }
    return service;

    // functions
    function getNextBooks() {
      var url = self.nextUrl ? self.nextUrl : 'api/books/';
      return $http.get(url)
        .then(({
            data
          }) => {
            var {
              currentPage, data, last_page, next_page_url
            } = data;

            self.nextUrl = next_page_url;
            return {
              data, last_page
            };
          },
          error => false
        )
    }
  });
