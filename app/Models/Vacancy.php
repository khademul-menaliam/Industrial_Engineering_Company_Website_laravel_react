<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    protected $fillable = [
        'ref',
        'title',
        'type',
        'description',
        'sort_order',
        'is_active',
    ];
}
