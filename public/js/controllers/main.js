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
    $scope.filterText = '';
    $scope.nPages = [];
    // utils
    $scope.addBookToAddEditModal = addBookToAddEditModal;
    $scope.addEditBook = addEditBook;
    $scope.deleteBook = deleteBook
    $scope.filterBooks = filterBooks;
    $scope.getPage = getPage;
    $scope.nextPage = nextPage;
    $scope.prevPage = prevPage;
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

    const createNPages = (responseData) => {
      if (responseData) {
        $scope.nPages = createPagesRange(responseData.last_page);
      }
    }

    const createPagesRange = (last) => {
      var arr = [];
      for (var i = 0; i < last; i++) {
        arr.push(i + 1);
      }

      return arr;
    }

    const handlePaginatorResponse = (responseData) => {
      if (responseData) {
        var {
          data, current_page
        } = responseData;
        $scope.books = data;
        $scope.currentPage = current_page;
      }

      return responseData;
    }

    const hideModal = (selector) => {
      $(selector).modal('toggle');
    }

    const initCtrl = () => {
      $paginator.getPageBooks(1).then(handlePaginatorResponse).then(createNPages)
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
          .then(handlePaginatorResponse).then(createNPages).then(resetAddEditModal);
      }
    }

    function addBookToAddEditModal(book) {
      $scope.addEditModal = Object.assign({}, book);
      // get only the year
      $scope.addEditModal.published_at = parseInt($scope.addEditModal.published_at.split('-').shift());
    }

    function deleteBook(id, index) {
      $books.deleteBook(id)
        .then(handlePaginatorResponse).then(createNPages);
    }

    function filterBooks() {
      $paginator.getBooksFilterBy($scope.filterText)
        .then(handlePaginatorResponse).then(createPagesRange);
    }

    function getPage(page) {
      $paginator.getPageBooks(page).then(handlePaginatorResponse);
    }

    function nextPage() {
      $paginator.getNextBooks().then(handlePaginatorResponse);
    }

    function prevPage() {
      $paginator.getPrevBooks().then(handlePaginatorResponse);
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
