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

class HomeController extends Controller
{
    /**
     * Get all homepage dynamic data.
     */
    public function index(): JsonResponse
    {
        $slides = HomeSlide::where('is_active', true)->orderBy('sort_order')->orderBy('id')->get();
        $services = HomeService::where('is_active', true)->orderBy('sort_order')->orderBy('id')->get();
        $processes = HomeProcess::where('is_active', true)->orderBy('sort_order')->orderBy('id')->get();
        $leaders = HomeLeader::where('is_active', true)->orderBy('sort_order')->orderBy('id')->get();
        $competencies = HomeCompetency::where('is_active', true)->orderBy('sort_order')->orderBy('id')->get();
        $projects = HomeProject::where('is_active', true)->orderBy('sort_order')->orderBy('id')->get();

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
