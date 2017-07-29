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
                  <li>
                    <button type="button" name="button">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span> Reserve
                    </button>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <button type="button" name="button">
                      <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
                    </button>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <button type="button" name="button">
                      <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>


        <!-- Pagination -->
        <!-- @extends ('home.pagination') -->

        <!-- Reserve Book Modal -->
        <!-- @extends ('home.reserveModal') -->

        <!-- Book List -->
        <!-- @extends ('home.booksList') -->

        <!-- Add Book Modal-->
        <!-- @extends ('home.addBook') -->

        <!-- Filter Box-->
        <!-- @extends ('home.search') -->
    </body>
</html>
