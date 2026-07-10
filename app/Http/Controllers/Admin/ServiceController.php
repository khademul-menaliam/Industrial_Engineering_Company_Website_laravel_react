<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceSetting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * List all services for the admin.
     */
    public function index(): JsonResponse
    {
        $services = Service::orderBy('category')->orderBy('sort_order')->get();
        $settings = ServiceSetting::all()->pluck('value', 'key');

        return response()->json([
            'success' => true,
            'services' => $services,
            'settings' => $settings,
        ]);
    }

    /**
     * Helper to upload image files.
     */
    private function handleImageUpload(Request $request, string $fieldName, ?string $existingImage = null): ?string
    {
        if ($request->hasFile($fieldName)) {
            $path = $request->file($fieldName)->store('services', 'public');
            return '/storage/' . $path;
        }
        return $request->input($fieldName . '_url', $existingImage);
    }

    /**
     * Create a new service.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'category' => 'required|string|in:consulting,dsi,maintenance',
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:services,slug',
            'short_description' => 'nullable|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'icon' => 'nullable|string|max:100',
            'tag' => 'nullable|string|max:100',
            'is_featured' => 'nullable|boolean',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
            
            // Detail fields
            'hero_image' => 'nullable|image|max:5120',
            'hero_image_url' => 'nullable|string',
            'detail_title' => 'nullable|string|max:255',
            'detail_description' => 'nullable|string',
            'badges' => 'nullable|string',
            'technical_specs' => 'nullable|string', // stringified JSON
            'metrics' => 'nullable|string', // stringified JSON
        ]);

        $imagePath = $this->handleImageUpload($request, 'image');
        $heroImagePath = $this->handleImageUpload($request, 'hero_image');

        $slug = $request->input('slug') ? Str::slug($request->input('slug')) : Str::slug($request->input('title'));

        // Parse JSON lists
        $specs = $request->input('technical_specs') ? json_decode($request->input('technical_specs'), true) : [];
        $metrics = $request->input('metrics') ? json_decode($request->input('metrics'), true) : [];

        $service = Service::create([
            'category' => $request->input('category'),
            'slug' => $slug,
            'title' => $request->input('title'),
            'short_description' => $request->input('short_description'),
            'image' => $imagePath,
            'icon' => $request->input('icon', 'settings'),
            'tag' => $request->input('tag'),
            'is_featured' => filter_var($request->input('is_featured', false), FILTER_VALIDATE_BOOLEAN),
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => filter_var($request->input('is_active', true), FILTER_VALIDATE_BOOLEAN),
            'hero_image' => $heroImagePath ?? $imagePath,
            'detail_title' => $request->input('detail_title') ?? $request->input('title'),
            'detail_description' => $request->input('detail_description'),
            'badges' => $request->input('badges'),
            'technical_specs' => $specs,
            'metrics' => $metrics,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Service created successfully.',
            'service' => $service
        ]);
    }

    /**
     * Update an existing service (handles POST for multipart form update).
     */
    public function update(Request $request, $id): JsonResponse
    {
        $service = Service::findOrFail($id);

        $request->validate([
            'category' => 'required|string|in:consulting,dsi,maintenance',
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:services,slug,' . $service->id,
            'short_description' => 'nullable|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'icon' => 'nullable|string|max:100',
            'tag' => 'nullable|string|max:100',
            'is_featured' => 'nullable',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable',
            
            // Detail fields
            'hero_image' => 'nullable|image|max:5120',
            'hero_image_url' => 'nullable|string',
            'detail_title' => 'nullable|string|max:255',
            'detail_description' => 'nullable|string',
            'badges' => 'nullable|string',
            'technical_specs' => 'nullable|string', // stringified JSON
            'metrics' => 'nullable|string', // stringified JSON
        ]);

        $imagePath = $this->handleImageUpload($request, 'image', $service->image);
        $heroImagePath = $this->handleImageUpload($request, 'hero_image', $service->hero_image);

        // Parse JSON lists
        $specs = $request->input('technical_specs');
        if (is_string($specs)) {
            $specs = json_decode($specs, true);
        }
        
        $metrics = $request->input('metrics');
        if (is_string($metrics)) {
            $metrics = json_decode($metrics, true);
        }

        $service->update([
            'category' => $request->input('category'),
            'slug' => Str::slug($request->input('slug')),
            'title' => $request->input('title'),
            'short_description' => $request->input('short_description'),
            'image' => $imagePath,
            'icon' => $request->input('icon'),
            'tag' => $request->input('tag'),
            'is_featured' => filter_var($request->input('is_featured'), FILTER_VALIDATE_BOOLEAN),
            'sort_order' => $request->input('sort_order', $service->sort_order),
            'is_active' => filter_var($request->input('is_active'), FILTER_VALIDATE_BOOLEAN),
            'hero_image' => $heroImagePath,
            'detail_title' => $request->input('detail_title'),
            'detail_description' => $request->input('detail_description'),
            'badges' => $request->input('badges'),
            'technical_specs' => $specs ?? [],
            'metrics' => $metrics ?? [],
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Service updated successfully.',
            'service' => $service
        ]);
    }

    /**
     * Delete a service.
     */
    public function destroy($id): JsonResponse
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return response()->json([
            'success' => true,
            'message' => 'Service deleted successfully.'
        ]);
    }

    /**
     * Bulk update service settings.
     */
    public function updateSettings(Request $request): JsonResponse
    {
        $request->validate([
            'settings' => 'required|array',
        ]);

        foreach ($request->input('settings') as $key => $value) {
            ServiceSetting::updateOrCreate(
                ['key' => $key],
                ['value' => $value, 'group' => $this->determineSettingGroup($key)]
            );
        }

        return response()->json([
            'success' => true,
            'message' => 'Settings updated successfully.'
        ]);
    }

    /**
     * Helper to group settings.
     */
    private function determineSettingGroup(string $key): string
    {
        if (str_starts_with($key, 'services_intro')) {
            return 'intro';
        }
        if (str_starts_with($key, 'zero_downtime')) {
            return 'zero_downtime';
        }
        if (str_starts_with($key, 'services_cta')) {
            return 'cta';
        }
        return 'general';
    }
}
