<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title'];

    /**
     * Define relationship between User and Task Models
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
