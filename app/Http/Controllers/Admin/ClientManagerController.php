<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\ClientSetting;
use App\Models\ClientTestimonial;

class ClientManagerController extends Controller
{
    // ================= CLIENTS =================
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

    // ================= SETTINGS =================
    public function getSettings()
    {
        $settings = ClientSetting::all()->pluck('value', 'key')->toArray();
        return response()->json([
            'success' => true,
            'data' => $settings
        ]);
    }

    public function updateSettings(Request $request)
    {
        \Log::info('updateSettings payload:', $request->all());
        \Log::info('Has file? ' . ($request->hasFile('hero_bg_file') ? 'YES' : 'NO'));
        
        $settings = $request->input('settings', []);
        
        // Handle file upload for hero background
        if ($request->hasFile('hero_bg_file')) {
            $file = $request->file('hero_bg_file');
            $path = $file->store('clients', 'public');
            $url = \Storage::disk('public')->url($path);
            $settings['hero_bg'] = $url;
        }

        foreach ($settings as $key => $value) {
            if ($value !== null) {
                ClientSetting::updateOrCreate(
                    ['key' => $key],
                    ['value' => is_array($value) ? json_encode($value) : $value]
                );
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Settings updated successfully.',
            'hero_bg' => $settings['hero_bg'] ?? null
        ]);
    }

    // ================= TESTIMONIALS =================
    public function getTestimonials()
    {
        $testimonials = ClientTestimonial::orderBy('order', 'asc')->paginate(10);
        return response()->json([
            'success' => true,
            'data' => $testimonials
        ]);
    }

    public function storeTestimonial(Request $request)
    {
        $validated = $request->validate([
            'quote' => 'required|string',
            'author' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'avatar' => 'required|string|max:500',
            'order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $testimonial = ClientTestimonial::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Testimonial created successfully.',
            'data' => $testimonial
        ]);
    }

    public function updateTestimonial(Request $request, $id)
    {
        $testimonial = ClientTestimonial::findOrFail($id);
        $validated = $request->validate([
            'quote' => 'required|string',
            'author' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'avatar' => 'required|string|max:500',
            'order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $testimonial->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Testimonial updated successfully.',
            'data' => $testimonial
        ]);
    }

    public function destroyTestimonial($id)
    {
        $testimonial = ClientTestimonial::findOrFail($id);
        $testimonial->delete();

        return response()->json([
            'success' => true,
            'message' => 'Testimonial deleted successfully.'
        ]);
    }
}
