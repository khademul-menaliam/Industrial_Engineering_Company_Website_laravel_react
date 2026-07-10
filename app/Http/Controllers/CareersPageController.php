<?php

namespace App\Http\Controllers;

use App\Models\Vacancy;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CareersPageController extends Controller
{
    /**
     * Get active job vacancies.
     */
    public function index(): JsonResponse
    {
        $vacancies = Vacancy::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();
            
        return response()->json([
            'success' => true,
            'vacancies' => $vacancies,
        ]);
    }

    /**
     * Submit a job application.
     */
    public function apply(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'position' => 'required|string|max:255',
            'linkedin' => 'nullable|url|max:255',
            'dossier' => 'nullable|file|max:10240|mimes:pdf,docx,doc', // 10MB limit
            'summary' => 'nullable|string',
        ]);

        $dossierPath = null;
        if ($request->hasFile('dossier')) {
            $path = $request->file('dossier')->store('dossiers', 'public');
            $dossierPath = '/storage/' . $path;
        }

        $application = Application::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'position' => $request->input('position'),
            'linkedin' => $request->input('linkedin'),
            'dossier_path' => $dossierPath,
            'summary' => $request->input('summary'),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Application transmitted successfully to Titan HR.',
            'application' => $application
        ]);
    }
}
