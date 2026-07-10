<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutTeamMember extends Model
{
    protected $table = 'about_team';

    protected $fillable = [
        'name',
        'role',
        'image',
        'bio',
        'linkedin',
        'email',
        'sort_order',
    ];
}
