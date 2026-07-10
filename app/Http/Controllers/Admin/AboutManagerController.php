<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutSetting;
use App\Models\AboutPillar;
use App\Models\AboutAdvisor;
use App\Models\AboutTeamMember;
use App\Models\AboutMilestone;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class AboutManagerController extends Controller
{
    /**
     * Get all about page datasets for the admin panel.
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
            'milestones' => $milestones
        ]);
    }

    /**
     * Update bulk about settings. Also supports image uploads for hero and CEO image keys.
     */
    public function updateSettings(Request $request): JsonResponse
    {
        // Support regular settings update
        if ($request->has('settings')) {
            $settingsData = json_decode($request->input('settings'), true) ?? $request->input('settings');
            
            foreach ($settingsData as $key => $value) {
                AboutSetting::updateOrCreate(
                    ['key' => $key],
                    ['value' => $value, 'group' => 'general']
                );
            }
        }

        // Support files uploads if present
        if ($request->hasFile('about_hero_image')) {
            $path = $request->file('about_hero_image')->store('about', 'public');
            AboutSetting::updateOrCreate(
                ['key' => 'about_hero_image'],
                ['value' => '/storage/' . $path, 'group' => 'general']
            );
        }

        if ($request->hasFile('about_ceo_image')) {
            $path = $request->file('about_ceo_image')->store('about', 'public');
            AboutSetting::updateOrCreate(
                ['key' => 'about_ceo_image'],
                ['value' => '/storage/' . $path, 'group' => 'general']
            );
        }

        return response()->json([
            'success' => true,
            'message' => 'General About settings saved successfully.',
            'settings' => AboutSetting::all()->pluck('value', 'key')
        ]);
    }

    /* =========================================================================
     * PILLARS CRUD
     * ========================================================================= */
    public function storePillar(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'description' => 'required|string',
            'sort_order' => 'nullable|integer',
        ]);

        $pillar = AboutPillar::create([
            'title' => $request->input('title'),
            'icon' => $request->input('icon'),
            'description' => $request->input('description'),
            'sort_order' => $request->input('sort_order', 0),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Strategic pillar created successfully.',
            'pillar' => $pillar
        ]);
    }

    public function updatePillar(Request $request, $id): JsonResponse
    {
        $pillar = AboutPillar::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'description' => 'required|string',
            'sort_order' => 'nullable|integer',
        ]);

        $pillar->update([
            'title' => $request->input('title'),
            'icon' => $request->input('icon'),
            'description' => $request->input('description'),
            'sort_order' => $request->input('sort_order', $pillar->sort_order),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Strategic pillar updated successfully.',
            'pillar' => $pillar
        ]);
    }

    public function destroyPillar($id): JsonResponse
    {
        $pillar = AboutPillar::findOrFail($id);
        $pillar->delete();

        return response()->json([
            'success' => true,
            'message' => 'Strategic pillar deleted successfully.'
        ]);
    }

    /* =========================================================================
     * ADVISORS CRUD
     * ========================================================================= */
    public function storeAdvisor(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'message' => 'required|string',
            'sort_order' => 'nullable|integer',
            'image_file' => 'nullable|image|max:5120',
        ]);

        $imageUrl = $request->input('image');
        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('about', 'public');
            $imageUrl = '/storage/' . $path;
        }

        $advisor = AboutAdvisor::create([
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'image' => $imageUrl,
            'message' => $request->input('message'),
            'sort_order' => $request->input('sort_order', 0),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Advisor profile created successfully.',
            'advisor' => $advisor
        ]);
    }

    public function updateAdvisor(Request $request, $id): JsonResponse
    {
        $advisor = AboutAdvisor::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'message' => 'required|string',
            'sort_order' => 'nullable|integer',
            'image_file' => 'nullable|image|max:5120',
        ]);

        $imageUrl = $request->input('image', $advisor->image);
        if ($request->hasFile('image_file')) {
            // Delete old file if exists
            if ($advisor->image && str_starts_with($advisor->image, '/storage/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $advisor->image));
            }
            $path = $request->file('image_file')->store('about', 'public');
            $imageUrl = '/storage/' . $path;
        }

        $advisor->update([
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'image' => $imageUrl,
            'message' => $request->input('message'),
            'sort_order' => $request->input('sort_order', $advisor->sort_order),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Advisor profile updated successfully.',
            'advisor' => $advisor
        ]);
    }

    public function destroyAdvisor($id): JsonResponse
    {
        $advisor = AboutAdvisor::findOrFail($id);
        if ($advisor->image && str_starts_with($advisor->image, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $advisor->image));
        }
        $advisor->delete();

        return response()->json([
            'success' => true,
            'message' => 'Advisor profile removed successfully.'
        ]);
    }

    /* =========================================================================
     * TEAM MEMBERS CRUD
     * ========================================================================= */
    public function storeTeamMember(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'bio' => 'required|string',
            'linkedin' => 'nullable|url|max:255',
            'email' => 'nullable|email|max:255',
            'sort_order' => 'nullable|integer',
            'image_file' => 'nullable|image|max:5120',
        ]);

        $imageUrl = $request->input('image');
        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('about', 'public');
            $imageUrl = '/storage/' . $path;
        }

        $member = AboutTeamMember::create([
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'image' => $imageUrl,
            'bio' => $request->input('bio'),
            'linkedin' => $request->input('linkedin'),
            'email' => $request->input('email'),
            'sort_order' => $request->input('sort_order', 0),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Team member profile created successfully.',
            'member' => $member
        ]);
    }

    public function updateTeamMember(Request $request, $id): JsonResponse
    {
        $member = AboutTeamMember::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'bio' => 'required|string',
            'linkedin' => 'nullable|url|max:255',
            'email' => 'nullable|email|max:255',
            'sort_order' => 'nullable|integer',
            'image_file' => 'nullable|image|max:5120',
        ]);

        $imageUrl = $request->input('image', $member->image);
        if ($request->hasFile('image_file')) {
            if ($member->image && str_starts_with($member->image, '/storage/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $member->image));
            }
            $path = $request->file('image_file')->store('about', 'public');
            $imageUrl = '/storage/' . $path;
        }

        $member->update([
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'image' => $imageUrl,
            'bio' => $request->input('bio'),
            'linkedin' => $request->input('linkedin'),
            'email' => $request->input('email'),
            'sort_order' => $request->input('sort_order', $member->sort_order),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Team member profile updated successfully.',
            'member' => $member
        ]);
    }

    public function destroyTeamMember($id): JsonResponse
    {
        $member = AboutTeamMember::findOrFail($id);
        if ($member->image && str_starts_with($member->image, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $member->image));
        }
        $member->delete();

        return response()->json([
            'success' => true,
            'message' => 'Team member profile removed successfully.'
        ]);
    }

    /* =========================================================================
     * MILESTONES CRUD
     * ========================================================================= */
    public function storeMilestone(Request $request): JsonResponse
    {
        $request->validate([
            'year' => 'required|string|max:50',
            'title' => 'required|string|max:255',
            'desc' => 'required|string',
            'sort_order' => 'nullable|integer',
        ]);

        $milestone = AboutMilestone::create([
            'year' => $request->input('year'),
            'title' => $request->input('title'),
            'desc' => $request->input('desc'),
            'sort_order' => $request->input('sort_order', 0),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Milestone created successfully.',
            'milestone' => $milestone
        ]);
    }

    public function updateMilestone(Request $request, $id): JsonResponse
    {
        $milestone = AboutMilestone::findOrFail($id);

        $request->validate([
            'year' => 'required|string|max:50',
            'title' => 'required|string|max:255',
            'desc' => 'required|string',
            'sort_order' => 'nullable|integer',
        ]);

        $milestone->update([
            'year' => $request->input('year'),
            'title' => $request->input('title'),
            'desc' => $request->input('desc'),
            'sort_order' => $request->input('sort_order', $milestone->sort_order),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Milestone updated successfully.',
            'milestone' => $milestone
        ]);
    }

    public function destroyMilestone($id): JsonResponse
    {
        $milestone = AboutMilestone::findOrFail($id);
        $milestone->delete();

        return response()->json([
            'success' => true,
            'message' => 'Milestone deleted successfully.'
        ]);
    }
}
