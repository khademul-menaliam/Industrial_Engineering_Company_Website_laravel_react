<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientSetting extends Model
{
    use HasFactory;

    protected $guarded = [];

    public static function getValue(string $key, $default = null)
    {
        $setting = self::where('key', $key)->first();
        if ($setting) {
            $val = $setting->value;
            $decoded = json_decode($val, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                return $decoded;
            }
            return $val;
        }
        return $default;
    }
}
