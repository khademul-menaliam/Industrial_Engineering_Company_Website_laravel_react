<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientPageController extends Controller
{
    public function index()
    {
        $clients = Client::where('is_active', true)->orderBy('order', 'asc')->get();
        return response()->json([
            'success' => true,
            'clients' => $clients
        ]);
    }
}
