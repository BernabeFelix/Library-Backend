<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Library</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <!-- Bootstrap Styles -->
        <link href="/css/app.css" rel="stylesheet" />
        <!-- Bootstrap Script -->
        <script type="text/javascript" src="/js/app.js"></script>
        <!-- AngularJs Stuff -->
        <script type="text/javascript" src="/js/module.js"></script>
        <script type="text/javascript" src="/js/services/books.js"></script>
        <script type="text/javascript" src="/js/controllers/main.js"></script>
        <!-- <script type="text/javascript" src="/js/components/bookList.js"></script> -->
    </head>
    <body ng-app="library">
      <div class="container" ng-controller="mainCtrl">
        <ul class="list-group">
          <li class="list-group-item" ng-repeat="book in books" ng-class="book.user? 'list-group-item-danger': 'list-group-item-success'">
            <div class="row">
              <div class="col-xs-12">
                <!-- Book info -->
                <div class="pull-left">
                  <h4 >{{book.name}}</h4>
                  <span>{{book.author}}</span>
                  <div ng-show="book.user">
                    <br>
                    <span>Reserved by: {{book.user}}</span>
                  </div>
                </div>
                <!-- Book actions -->
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  class="btn btn-info dropdown-toggle pull-right"
                  data-toggle="dropdown"
                  type="button"
                  >
                  <span class="glyphicon glyphicon-option-vertical"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li ng-show="!book.user">
                    <a data-toggle="modal" data-target="#reserveBookModal" ng-click="saveBookToReserve($index)">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span> Reserve
                    </a>
                  </li>
                  <li ng-show="book.user">
                    <a data-toggle="modal" >
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span> Release
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a>
                      <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a>
                      <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>

        <!-- Reserve Book Modal -->
        <div class="modal fade" id="reserveBookModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
          <div class="modal-content">
            <!-- Header -->
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel"> Reserve Book </h4>
            </div>
            <!-- Body -->
            <div class="modal-body">
              <form name="reserveForm" novalidate ng-submit="reserveBook(reserveForm.$invalid);">
                <div class="form-group">
                  <label for="personNameInput">Person's Name</label>
                  <input type="text" class="form-control" id="personNameInput" ng-model="borrowerName" placeholder="Name" required>
                </div>

                <button type="submit" class="btn btn-success" ng-disabled="reserveForm.$invalid">Reserve</button>
              </form>
            </div>
            <!-- Footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
        </div>
    </body>
</html>
