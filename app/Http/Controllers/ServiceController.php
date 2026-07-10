<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceSetting;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{
    /**
     * Display a listing of services grouped by category, with settings.
     */
    public function index(): JsonResponse
    {
        $services = Service::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        $settings = ServiceSetting::all()->pluck('value', 'key');

        return response()->json([
            'success' => true,
            'settings' => $settings,
            'categories' => [
                'consulting' => $services->where('category', 'consulting')->values(),
                'dsi' => $services->where('category', 'dsi')->values(),
                'maintenance' => $services->where('category', 'maintenance')->values(),
            ]
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
