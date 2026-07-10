<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutAdvisor extends Model
{
    protected $fillable = [
        'name',
        'role',
        'image',
        'message',
        'sort_order',
    ];
}
