<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;

class BookController extends Controller
{
  public function store(Request $request)
  {
    $book = new Book;

    $book->author = $request->input('author');
    $book->category_id = $request->input('category_id');
    $book->name = $request->input('name');
    $book->published_at = $request->input('published_at');
    $book->user = $request->input('user')?? '';

    $book->save();

    return response()->json(['id' => $book->id]);
  }

  public function destroy($id)
  {
    Book::destroy($id);

    return response()->json(['success' => true]);
  }

  public function index()
  {
    return response()->json(Book::paginate(2));
  }

  public function update(Request $request, $id)
  {
    $author = $request->input('author');
    $category_id = $request->input('category_id');
    $name = $request->input('name');
    $published_at = $request->input('published_at');
    $user = $request->input('user')?? '';

    Book::where('id', $id)->update(compact(['name', 'author', 'category_id', 'published_at', 'user']));

    return response()->json(['success' => true]);
  }
}
