<!doctype html>
<html lang="{{ app()->getLocale() }}">
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
    </head>
    <body ng-app="app">
      <div class="container" ng-controller="mainCtrl as vm">
        {{x}}
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
