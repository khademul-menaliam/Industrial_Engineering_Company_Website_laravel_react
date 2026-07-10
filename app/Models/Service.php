<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'category',
        'slug',
        'title',
        'short_description',
        'image',
        'icon',
        'tag',
        'is_featured',
        'sort_order',
        'is_active',
        'hero_image',
        'detail_title',
        'detail_description',
        'badges',
        'technical_specs',
        'metrics',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'technical_specs' => 'array',
        'metrics' => 'array',
    ];
}
