<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutPillar extends Model
{
    protected $fillable = [
        'title',
        'icon',
        'description',
        'sort_order',
    ];
}
