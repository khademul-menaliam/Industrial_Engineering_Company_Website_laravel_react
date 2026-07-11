<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientSetting;
use App\Models\ClientTestimonial;
use Illuminate\Http\Request;

class ClientPageController extends Controller
{
    public function index()
    {
        $clients = Client::where('is_active', true)->orderBy('order', 'asc')->get();
        
        // Format settings into a key-value array
        $settings = ClientSetting::all()->pluck('value', 'key')->toArray();

        $testimonials = ClientTestimonial::where('is_active', true)->orderBy('order', 'asc')->get();

        return response()->json([
            'success' => true,
            'clients' => $clients,
            'settings' => $settings,
            'testimonials' => $testimonials
        ]);
    }
}
