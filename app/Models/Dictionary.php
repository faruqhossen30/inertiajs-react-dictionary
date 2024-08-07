<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dictionary extends Model
{
    use HasFactory;
    protected $fillable = ['word','slug','pronunciation','meaning','page_number','author_id','edit_author_id'];

    public function categories(){
        return $this->belongsToMany(Category::class,'portfolio_categories');
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

}
