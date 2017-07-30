<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function() {
  return view('index'); // will return resources/views/index.php
});

Route::group(array('prefix' => 'api'), function() {
    Route::resource('books', 'BookController',
        array('only' => array('index', 'update')));

    Route::resource('categories', 'CategoryController',
        array('only' => array('index')));
});
