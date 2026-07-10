<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceSetting extends Model
{
    protected $fillable = [
        'key',
        'value',
        'group',
    ];
}
