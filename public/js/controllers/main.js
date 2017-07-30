angular
  .module('library')
  .controller('mainCtrl', ($books, $categories, $paginator, $scope) => {
    // data
    var bookToReserveIndex = undefined;
    $scope.addEditModal = undefined;
    $scope.books = [];
    $scope.bookYears = [];
    $scope.borrowerName = '';
    $scope.categories = [];
    $scope.currentPage = 1;
    $scope.nPages = [];
    // utils
    $scope.addBookToAddEditModal = addBookToAddEditModal;
    $scope.addEditBook = addEditBook;
    $scope.deleteBook = deleteBook
    $scope.nextPage = nextPage;
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

    const createPagesRange = (last) => {
      var arr = [];
      for (var i = 0; i < last; i++) {
        arr.push(i + 1);
      }

      return arr;
    }

    const hideModal = (selector) => {
      $(selector).modal('toggle');
    }

    const initCtrl = () => {
      $paginator.getNextBooks().then((data) => {
        if (data) {
          var {
            data, last_page
          } = data;
          $scope.books = data;
          $scope.nPages = createPagesRange(last_page);
        }
      });
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
      // for new or edit book
      $scope.addEditModal.published_at = changeYearInString(bookToReserve ? bookToReserve.published_at : '0000-01-01',
        $scope.addEditModal
        .published_at);

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
          .then((newId) => {
            if (newId) {
              $scope.addEditModal.id = newId;
              $scope.books.push($scope.addEditModal);
              // clean fields
              resetAddEditModal();
            }
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

    function nextPage() {
      $paginator.getNextBooks().then((data) => {
        if (data) {
          var {
            data
          } = data;
          $scope.books = data;
          $scope.currentPage += 1;
        }
      });
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
