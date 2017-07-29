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
          <form method="POST" action="/books">
            {{ csrf_field() }}
            <div class="form-group">
              <label for="nameInput">Name</label>
              <input type="text" class="form-control" id="nameInput" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="authorInput">Author</label>
              <input type="text" class="form-control" id="authorInput" placeholder="Author">
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
            <button type="submit" class="btn btn-success">Save</button>
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
