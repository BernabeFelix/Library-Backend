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
    $scope.addEditBook = addEditBook;
    $scope.deleteBook = deleteBook
    $scope.releaseBook = releaseBook;
    $scope.reserveBook = reserveBook;
    $scope.resetAddEditModal = resetAddEditModal;
    $scope.resetReserveModal = resetReserveModal;
    $scope.saveBookToReserve = saveBookToReserve;

    ////////// helpers //////////
    const changeYearInString = (date, newYear) => {
      var newDate = date.split('-');
      newDate[0] = newYear;
      newDate = newDate.join('-');

      return newDate;
    }

    const hideModal = (selector) => {
      $(selector).modal('toggle');
    }

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

    ////////// functions //////////
    function addEditBook(formInvalid) {
      // close modal
      hideModal('#addEditBookModal')
        // validate form (theoretically it should always be valid)
      if (formInvalid) return;

      // create a new object and assign the new user
      var bookToReserve = $scope.books[bookToReserveIndex];
      $scope.addEditModal.published_at = changeYearInString(bookToReserve.published_at, $scope.addEditModal.published_at);

      if ($scope.addEditModal.id) {
        $books.editBook($scope.addEditModal.id, $scope.addEditModal)
          .then((allGood) => {
            if (allGood) {
              $scope.books[bookToReserveIndex] = $scope.addEditModal;
            }
            // clean fields
            resetAddEditModal();
          })
      } else {
        $books.createBook($scope.addEditModal)
          .then((allGood) => {
            if (allGood) {
              $scope.books[bookToReserveIndex] = bookToReserve;
            }
            // clean fields
            $scope.borrowerName = '';
            bookToReserveIndex = undefined;
          })
      }
    }

    function addBookToAddEditModal(book) {
      $scope.addEditModal = Object.assign({}, book);
      // get only the year
      $scope.addEditModal.published_at = parseInt($scope.addEditModal.published_at.split('-').shift());
    }

    function deleteBook(id, index) {
      $books.deleteBook(id)
        .then((allGood) => {
          if (allGood) {
            $scope.books.splice(index, 1);
          }
        })
    }

    function releaseBook(index) {
      // create a new object and assign the new user
      var bookToReserve = Object.assign({}, $scope.books[index]);
      bookToReserve.user = '';

      $books.editBook(bookToReserve.id, bookToReserve)
        .then((allGood) => {
          if (allGood) {
            $scope.books[index] = bookToReserve;
          }
        })
    }

    function reserveBook(formInvalid) {
      // close modal
      hideModal('#reserveBookModal');
      // validate form (theoretically it should always be valid)
      if (formInvalid) return;

      // create a new object and assign the new user
      var bookToReserve = Object.assign({}, $scope.books[bookToReserveIndex]);
      bookToReserve.user = $scope.borrowerName;

      $books.editBook(bookToReserve.id, bookToReserve)
        .then((allGood) => {
          if (allGood) {
            $scope.books[bookToReserveIndex] = bookToReserve;
          }
          // clean fields
          resetReserveModal();
        })
    }

    function resetAddEditModal() {
      $scope.addEditModal = undefined;
      bookToReserveIndex = undefined;
    }

    function resetReserveModal() {
      $scope.borrowerName = '';
      bookToReserveIndex = undefined;
    }

    function saveBookToReserve(index) {
      bookToReserveIndex = index;
    }

    initCtrl();
  });
