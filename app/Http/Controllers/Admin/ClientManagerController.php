<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientManagerController extends Controller
{
    public function index()
    {
        $clients = Client::orderBy('order', 'asc')->paginate(10);
        return response()->json([
            'success' => true,
            'data' => $clients
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'required|string|max:500',
            'desc' => 'required|string',
            'type' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $client = Client::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Client created successfully.',
            'data' => $client
        ]);
    }

    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'required|string|max:500',
            'desc' => 'required|string',
            'type' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $client->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Client updated successfully.',
            'data' => $client
        ]);
    }

    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();

        return response()->json([
            'success' => true,
            'message' => 'Client deleted successfully.'
        ]);
    }
}
