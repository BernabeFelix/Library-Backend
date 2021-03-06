<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
  public $timestamps = false;
  protected $fillable = ['id'];

  public function category()
  {
    return $this->belongsTo(Category::class);
  }
}
