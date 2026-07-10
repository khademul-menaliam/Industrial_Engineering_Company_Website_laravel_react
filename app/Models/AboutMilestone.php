<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutMilestone extends Model
{
    protected $fillable = [
        'year',
        'title',
        'desc',
        'sort_order',
    ];
}
