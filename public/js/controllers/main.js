angular
  .module('library')
  .controller('mainCtrl', ($scope, $books) => {
    $scope.books = [];


    function initCtrl() {
      $books.getAllBooks().then((books) => $scope.books = books);
    }

    initCtrl();
  });
