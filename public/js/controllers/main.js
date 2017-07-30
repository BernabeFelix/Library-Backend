angular
  .module('library')
  .controller('mainCtrl', ($scope, $books) => {
    // data
    $scope.books = [];
    $scope.borrowerName = '';
    $scope.bookToReserveIndex = undefined;
    // utils
    $scope.reserveBook = reserveBook;
    $scope.saveBookToReserve = saveBookToReserve;

    function initCtrl() {
      $books.getAllBooks().then((books) => $scope.books = books);
    }

    function saveBookToReserve(index) {
      $scope.bookToReserveIndex = index;
    }

    function reserveBook(formInvalid) {
      // close modal
      $('#reserveBookModal').modal('toggle');
      // validate form (theoretically it should always be valid)
      if (formInvalid) return;

      // create a new object and assign the new user
      var bookToReserve = Object.assign({}, $scope.books[$scope.bookToReserveIndex]);
      bookToReserve.user = $scope.borrowerName;

      $books.editBook(bookToReserve)
        .then((allGood) => {
          if (allGood) {
            $scope.books[$scope.bookToReserveIndex] = bookToReserve;
          }
          // clean fields
          $scope.borrowerName = '';
          $scope.bookToReserveIndex = undefined;
        })
    }

    initCtrl();
  });
