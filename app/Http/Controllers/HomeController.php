<?php

namespace App\Http\Controllers;

use App\Models\HomeSlide;
use App\Models\HomeService;
use App\Models\HomeProcess;
use App\Models\HomeLeader;
use App\Models\HomeCompetency;
use App\Models\HomeProject;
use App\Models\HomeSetting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Get all homepage dynamic data.
     */
    public function index(Request $request): JsonResponse
    {
        $isAdmin = $request->has('admin');

        $slidesQuery = HomeSlide::orderBy('sort_order')->orderBy('id');
        $servicesQuery = HomeService::orderBy('sort_order')->orderBy('id');
        $processesQuery = HomeProcess::orderBy('sort_order')->orderBy('id');
        $leadersQuery = HomeLeader::orderBy('sort_order')->orderBy('id');
        $competenciesQuery = HomeCompetency::orderBy('sort_order')->orderBy('id');
        $projectsQuery = HomeProject::orderBy('sort_order')->orderBy('id');

        if (!$isAdmin) {
            $slidesQuery->where('is_active', true);
            $servicesQuery->where('is_active', true);
            $processesQuery->where('is_active', true);
            $leadersQuery->where('is_active', true);
            $competenciesQuery->where('is_active', true);
            $projectsQuery->where('is_active', true);
        }

        $slides = $slidesQuery->get();
        $services = $servicesQuery->get();
        $processes = $processesQuery->get();
        $leaders = $leadersQuery->get();
        $competencies = $competenciesQuery->get();
        $projects = $projectsQuery->get();

        // Load all settings into an associative array
        $settingsRaw = HomeSetting::all();
        $settings = [];
        foreach ($settingsRaw as $setting) {
            $val = $setting->value;
            $decoded = json_decode($val, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                $settings[$setting->key] = $decoded;
            } else {
                $settings[$setting->key] = $val;
            }
        }

        $clients = \App\Models\Client::where('is_active', true)->orderBy('order', 'asc')->get();

        return response()->json([
            'slides' => $slides,
            'services' => $services,
            'processes' => $processes,
            'leaders' => $leaders,
            'competencies' => $competencies,
            'projects' => $projects,
            'settings' => $settings,
            'clients' => $clients,
        ]);
    }
}
