<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Vacancy;
use App\Models\Application;
use App\Models\ContactSetting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class CareersManagerController extends Controller
{
    /**
     * Get vacancies, applications, and page settings.
     */
    public function index(): JsonResponse
    {
        $vacancies = Vacancy::orderBy('sort_order')->orderBy('id')->get();
        $applications = Application::orderBy('created_at', 'desc')->get();
        $settings = ContactSetting::where('group', 'careers')->pluck('value', 'key');

        return response()->json([
            'success' => true,
            'vacancies' => $vacancies,
            'applications' => $applications,
            'settings' => $settings,
        ]);
    }

    /**
     * Update career settings and support file upload.
     */
    public function updateSettings(Request $request): JsonResponse
    {
        if ($request->has('settings')) {
            $settingsData = is_string($request->input('settings'))
                ? json_decode($request->input('settings'), true)
                : $request->input('settings');

            if (is_array($settingsData)) {
                foreach ($settingsData as $key => $value) {
                    ContactSetting::updateOrCreate(
                        ['key' => $key],
                        ['value' => $value, 'group' => 'careers']
                    );
                }
            }
        }

        // Support direct image file upload
        if ($request->hasFile('careers_image_file')) {
            $path = $request->file('careers_image_file')->store('careers', 'public');
            ContactSetting::updateOrCreate(
                ['key' => 'careers_image'],
                ['value' => '/storage/' . $path, 'group' => 'careers']
            );
        }

        return response()->json([
            'success' => true,
            'message' => 'Careers settings updated successfully.',
            'settings' => ContactSetting::where('group', 'careers')->pluck('value', 'key'),
        ]);
    }

    /**
     * Create a vacancy opening.
     */
    public function storeVacancy(Request $request): JsonResponse
    {
        $request->validate([
            'ref' => 'required|string|max:100',
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'description' => 'required|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $vacancy = Vacancy::create([
            'ref' => $request->input('ref'),
            'title' => $request->input('title'),
            'type' => $request->input('type'),
            'description' => $request->input('description'),
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => filter_var($request->input('is_active', true), FILTER_VALIDATE_BOOLEAN),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Job opening created successfully.',
            'vacancy' => $vacancy
        ]);
    }

    /**
     * Update vacancy opening details.
     */
    public function updateVacancy(Request $request, $id): JsonResponse
    {
        $vacancy = Vacancy::findOrFail($id);

        $request->validate([
            'ref' => 'required|string|max:100',
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'description' => 'required|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable',
        ]);

        $vacancy->update([
            'ref' => $request->input('ref'),
            'title' => $request->input('title'),
            'type' => $request->input('type'),
            'description' => $request->input('description'),
            'sort_order' => $request->input('sort_order', $vacancy->sort_order),
            'is_active' => filter_var($request->input('is_active'), FILTER_VALIDATE_BOOLEAN),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Job opening updated successfully.',
            'vacancy' => $vacancy
        ]);
    }

    /**
     * Delete vacancy opening.
     */
    public function destroyVacancy($id): JsonResponse
    {
        $vacancy = Vacancy::findOrFail($id);
        $vacancy->delete();

        return response()->json([
            'success' => true,
            'message' => 'Job vacancy removed successfully.'
        ]);
    }

    /**
     * Delete a job application.
     */
    public function destroyApplication($id): JsonResponse
    {
        $application = Application::findOrFail($id);
        
        // Remove dossier file if it exists
        if ($application->dossier_path) {
            $path = str_replace('/storage/', '', $application->dossier_path);
            Storage::disk('public')->delete($path);
        }
        
        $application->delete();

        return response()->json([
            'success' => true,
            'message' => 'Job application removed successfully.'
        ]);
    }
}
