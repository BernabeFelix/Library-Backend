<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Library</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <!-- Bootstrap Styles -->
        <link href = {{ asset("css/app.css") }} rel="stylesheet" />
        <!-- Bootstrap Script -->
        <script type="text/javascript" src={{ asset("js/app.js") }}>
        </script>
    </head>
    <body>
      <div class="container">
        <!-- Filter Box & add book -->
        <div class="row" style="margin-bottom: 40px; margin-top: 20px;">
          <div class="col-xs-12">
            <h3>Filter books</h3>
          </div>
          <div class="col-xs-5">
            <select class="form-control" id="sel1">
              <option>Name</option>
              <option>Author</option>
            </select>
          </div>

          <div class="col-xs-12">
            <input class="form-control" type="text" placeholder="Search...">
          </div>
        </div>

        <!-- Add Book Modal-->
        <div class="row">
          <div class="col-xs-5">
            <button
              class="btn btn-success"
              data-toggle="modal"
              data-target="#addBookModal"
              name="button"
              style="width: 100%;"
              type="button"
              >Add Book</button>
          </div>

          <!-- Modal -->
          <div class="modal fade" id="addBookModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <!-- Header -->
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel"> Add Book </h4>
                </div>
                <!-- Body -->
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="nameInput">Name</label>
                      <input type="email" class="form-control" id="nameInput" placeholder="Name">
                    </div>
                    <div class="form-group">
                      <label for="authorInput">Author</label>
                      <input type="password" class="form-control" id="authorInput" placeholder="Author">
                    </div>
                    <div class="form-group">
                      <label for="categorySelect">Category</label>
                      <select class="form-control" id="categorySelect">
                        <option>Fiction</option>
                        <option>Novel</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="publishedDateYearSelect">Published Year</label>
                      <select class="form-control" id="publishedDateYearSelect">
                        <option>1900</option>
                        <option>1992</option>
                        <option>...</option>
                        <option>2017</option>
                      </select>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                  </form>
                </div>
                <!-- Footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Book List -->
        <ul class="list-group">
          <li class="list-group-item list-group-item-success">
            <div class="row">
              <div class="col-xs-12">
                <!-- Book info -->
                <div class="pull-left">
                  <h4 >Harry Potter</h4>
                  <span>J.K. Rowling</span>
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

          <li class="list-group-item list-group-item-danger">
            <div class="row">
              <div class="col-xs-12">
                <!-- Book info -->
                <div class="pull-left">
                  <h4 >Harry Potter</h4>
                  <span>J.K. Rowling</span>
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
      <div class="row">
          <div class="col-xs-12">
            <nav aria-label="Page navigation" class="text-center">
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </body>
</html>
