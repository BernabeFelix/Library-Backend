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
}
