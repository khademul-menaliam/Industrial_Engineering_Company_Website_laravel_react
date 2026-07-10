<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceCategory;
use App\Models\ServiceSetting;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{
    /**
     * Display a listing of services grouped by category, with settings.
     */
    public function index(): JsonResponse
    {
        $categories = ServiceCategory::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $services = Service::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $settings = ServiceSetting::all()->pluck('value', 'key');

        // Group services by category slug
        $grouped = [];
        foreach ($categories as $cat) {
            $grouped[$cat->slug] = $services->where('category', $cat->slug)->values();
        }

        return response()->json([
            'success' => true,
            'settings' => $settings,
            'categories_list' => $categories,
            'categories' => $grouped
        ]);
    }

    /**
     * Display the specified service detail page.
     */
    public function show(string $slug): JsonResponse
    {
        $service = Service::where('slug', $slug)
            ->where('is_active', true)
            ->first();

        if (!$service) {
            return response()->json([
                'success' => false,
                'message' => 'Service not found or inactive.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'service' => $service
        ]);
    }
}
