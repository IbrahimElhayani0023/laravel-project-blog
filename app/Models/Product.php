<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'text',
        'image',
        'slug',
        'category_id',
        'user_id',
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
}
