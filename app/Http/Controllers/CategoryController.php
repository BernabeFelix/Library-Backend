<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Category;

class CategoryController extends Controller
{
  public function index()
  {
    return response()->json(Category::orderBy('name')->get());
  }
}
