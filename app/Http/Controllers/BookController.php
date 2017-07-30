<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;

class BookController extends Controller
{
  public function index()
  {
    return response()->json(Book::all());
  }

  public function update(Request $request, $id)
  {
    $name = $request->input('name');
    $author = $request->input('author');
    $category_id = $request->input('category_id');
    $user = $request->input('user')?? '';

    Book::where('id', $id)->update(compact(['name', 'author', 'category_id', 'user']));

    return response()->json(['success' => true]);
  }
}
