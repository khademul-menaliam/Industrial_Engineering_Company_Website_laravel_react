<?php

namespace App\Http\Controllers;

use App\Models\AboutSetting;
use App\Models\AboutPillar;
use App\Models\AboutAdvisor;
use App\Models\AboutTeamMember;
use App\Models\AboutMilestone;
use Illuminate\Http\JsonResponse;

class AboutPageController extends Controller
{
    /**
     * Get all public About page data.
     */
    public function index(): JsonResponse
    {
        $settings = AboutSetting::all()->pluck('value', 'key');
        $pillars = AboutPillar::orderBy('sort_order')->orderBy('id')->get();
        $advisors = AboutAdvisor::orderBy('sort_order')->orderBy('id')->get();
        $team = AboutTeamMember::orderBy('sort_order')->orderBy('id')->get();
        $milestones = AboutMilestone::orderBy('sort_order')->orderBy('id')->get();

        return response()->json([
            'success' => true,
            'settings' => $settings,
            'pillars' => $pillars,
            'advisors' => $advisors,
            'team' => $team,
            'milestones' => $milestones,
        ]);
    }
}
