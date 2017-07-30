angular
  .module('library')
  .controller('mainCtrl', ($books, $categories, $scope) => {
    // data
    var bookToReserveIndex = undefined;
    $scope.books = [];
    $scope.bookYears = [];
    $scope.categories = [];
    $scope.borrowerName = '';
    $scope.addEditModal = undefined;
    // utils
    $scope.addBookToAddEditModal = addBookToAddEditModal;
    $scope.releaseBook = releaseBook;
    $scope.reserveBook = reserveBook;
    $scope.saveBookToReserve = saveBookToReserve;

    const initCtrl = () => {
      $books.getAllBooks().then((books) => $scope.books = books);
      $categories.getAllCategories().then((categories) => $scope.categories = categories);
      fillBookYears(1900, 2017);
    }

    const fillBookYears = (start, end) => {
      for (var i = end - start; i >= 0; i--) {
        $scope.bookYears[end - start - i] = i + start;
      }
    }

    function addBookToAddEditModal({
      name, author, category_id, published_at
    }) {
      published_at = parseInt(published_at.split('-').shift())

      $scope.addEditModal = {
        name, author, category_id, published_at
      };
    }

    function releaseBook(index) {
      // create a new object and assign the new user
      var bookToReserve = Object.assign({}, $scope.books[index]);
      bookToReserve.user = '';

      $books.editBook(bookToReserve)
        .then((allGood) => {
          if (allGood) {
            $scope.books[index] = bookToReserve;
          }
        })
    }

    function reserveBook(formInvalid) {
      // close modal
      $('#reserveBookModal').modal('toggle');
      // validate form (theoretically it should always be valid)
      if (formInvalid) return;

      // create a new object and assign the new user
      var bookToReserve = Object.assign({}, $scope.books[bookToReserveIndex]);
      bookToReserve.user = $scope.borrowerName;

      $books.editBook(bookToReserve)
        .then((allGood) => {
          if (allGood) {
            $scope.books[bookToReserveIndex] = bookToReserve;
          }
          // clean fields
          $scope.borrowerName = '';
          bookToReserveIndex = undefined;
        })
    }

    function saveBookToReserve(index) {
      bookToReserveIndex = index;
    }

    initCtrl();
  });
