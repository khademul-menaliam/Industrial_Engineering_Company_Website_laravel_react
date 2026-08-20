<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolutionPartner extends Model
{
    use HasFactory;

    protected $table = 'solution_partners';

    protected $fillable = [
        'name',
        'logo',
        'type',
        'desc',
        'order',
        'is_active',
    ];
}
