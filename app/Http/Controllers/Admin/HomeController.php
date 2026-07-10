<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomeSlide;
use App\Models\HomeService;
use App\Models\HomeProcess;
use App\Models\HomeLeader;
use App\Models\HomeCompetency;
use App\Models\HomeProject;
use App\Models\HomeSetting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class HomeController extends Controller
{
    /**
     * Bulk update settings.
     */
    public function updateSettings(Request $request): JsonResponse
    {
        $request->validate([
            'settings' => 'required|array',
        ]);

        foreach ($request->input('settings') as $key => $value) {
            $val = is_array($value) ? json_encode($value) : $value;
            HomeSetting::updateOrCreate(
                ['key' => $key],
                ['value' => $val]
            );
        }

        return response()->json(['message' => 'Settings updated successfully.']);
    }

    /**
     * Helpers to upload file or get remote URL.
     */
    private function handleImageUpload(Request $request, $existingImage = null): ?string
    {
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('homepage', 'public');
            return '/storage/' . $path;
        }
        return $request->input('image_url', $existingImage);
    }

    // --- Slides CRUD ---

    public function storeSlide(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request);

        $slide = HomeSlide::create([
            'title' => $request->input('title'),
            'subtitle' => $request->input('subtitle'),
            'image' => $imagePath ?? '',
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => $request->input('is_active', true),
        ]);

        return response()->json(['message' => 'Slide created successfully.', 'slide' => $slide]);
    }

    public function updateSlide(Request $request, $id): JsonResponse
    {
        $slide = HomeSlide::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request, $slide->image);

        $slide->update([
            'title' => $request->input('title'),
            'subtitle' => $request->input('subtitle'),
            'image' => $imagePath,
            'sort_order' => $request->input('sort_order', $slide->sort_order),
            'is_active' => $request->input('is_active', $slide->is_active),
        ]);

        return response()->json(['message' => 'Slide updated successfully.', 'slide' => $slide]);
    }

    public function destroySlide($id): JsonResponse
    {
        $slide = HomeSlide::findOrFail($id);
        $slide->delete();

        return response()->json(['message' => 'Slide deleted successfully.']);
    }

    // --- Services CRUD ---

    public function storeService(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'required|string|max:100',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request);

        $service = HomeService::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'icon' => $request->input('icon'),
            'image' => $imagePath,
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => $request->input('is_active', true),
        ]);

        return response()->json(['message' => 'Service created successfully.', 'service' => $service]);
    }

    public function updateService(Request $request, $id): JsonResponse
    {
        $service = HomeService::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'required|string|max:100',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request, $service->image);

        $service->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'icon' => $request->input('icon'),
            'image' => $imagePath,
            'sort_order' => $request->input('sort_order', $service->sort_order),
            'is_active' => $request->input('is_active', $service->is_active),
        ]);

        return response()->json(['message' => 'Service updated successfully.', 'service' => $service]);
    }

    public function destroyService($id): JsonResponse
    {
        $service = HomeService::findOrFail($id);
        $service->delete();

        return response()->json(['message' => 'Service deleted successfully.']);
    }

    // --- Operational Methodology Processes CRUD ---

    public function storeProcess(Request $request): JsonResponse
    {
        $request->validate([
            'step_number' => 'required|string|max:10',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $process = HomeProcess::create([
            'step_number' => $request->input('step_number'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => $request->input('is_active', true),
        ]);

        return response()->json(['message' => 'Process step created successfully.', 'process' => $process]);
    }

    public function updateProcess(Request $request, $id): JsonResponse
    {
        $process = HomeProcess::findOrFail($id);

        $request->validate([
            'step_number' => 'required|string|max:10',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $process->update([
            'step_number' => $request->input('step_number'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'sort_order' => $request->input('sort_order', $process->sort_order),
            'is_active' => $request->input('is_active', $process->is_active),
        ]);

        return response()->json(['message' => 'Process step updated successfully.', 'process' => $process]);
    }

    public function destroyProcess($id): JsonResponse
    {
        $process = HomeProcess::findOrFail($id);
        $process->delete();

        return response()->json(['message' => 'Process step deleted successfully.']);
    }

    // --- Leadership CRUD ---

    public function storeLeader(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'quote' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request);

        $leader = HomeLeader::create([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'quote' => $request->input('quote'),
            'image' => $imagePath ?? '',
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => $request->input('is_active', true),
        ]);

        return response()->json(['message' => 'Leader profile created successfully.', 'leader' => $leader]);
    }

    public function updateLeader(Request $request, $id): JsonResponse
    {
        $leader = HomeLeader::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'quote' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request, $leader->image);

        $leader->update([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'quote' => $request->input('quote'),
            'image' => $imagePath,
            'sort_order' => $request->input('sort_order', $leader->sort_order),
            'is_active' => $request->input('is_active', $leader->is_active),
        ]);

        return response()->json(['message' => 'Leader profile updated successfully.', 'leader' => $leader]);
    }

    public function destroyLeader($id): JsonResponse
    {
        $leader = HomeLeader::findOrFail($id);
        $leader->delete();

        return response()->json(['message' => 'Leader profile deleted successfully.']);
    }

    // --- Competencies CRUD ---

    public function storeCompetency(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'items' => 'required|array',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'button_text' => 'nullable|string|max:255',
            'button_link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request);

        $competency = HomeCompetency::create([
            'title' => $request->input('title'),
            'items' => $request->input('items'),
            'image' => $imagePath ?? '',
            'button_text' => $request->input('button_text', 'View Details'),
            'button_link' => $request->input('button_link', '/services'),
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => $request->input('is_active', true),
        ]);

        return response()->json(['message' => 'Competency created successfully.', 'competency' => $competency]);
    }

    public function updateCompetency(Request $request, $id): JsonResponse
    {
        $competency = HomeCompetency::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'items' => 'required|array',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'button_text' => 'nullable|string|max:255',
            'button_link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request, $competency->image);

        $competency->update([
            'title' => $request->input('title'),
            'items' => $request->input('items'),
            'image' => $imagePath,
            'button_text' => $request->input('button_text', $competency->button_text),
            'button_link' => $request->input('button_link', $competency->button_link),
            'sort_order' => $request->input('sort_order', $competency->sort_order),
            'is_active' => $request->input('is_active', $competency->is_active),
        ]);

        return response()->json(['message' => 'Competency updated successfully.', 'competency' => $competency]);
    }

    public function destroyCompetency($id): JsonResponse
    {
        $competency = HomeCompetency::findOrFail($id);
        $competency->delete();

        return response()->json(['message' => 'Competency deleted successfully.']);
    }

    // --- Projects CRUD ---

    public function storeProject(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request);

        $project = HomeProject::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image' => $imagePath ?? '',
            'link' => $request->input('link', '/portfolio'),
            'sort_order' => $request->input('sort_order', 0),
            'is_active' => $request->input('is_active', true),
        ]);

        return response()->json(['message' => 'Project created successfully.', 'project' => $project]);
    }

    public function updateProject(Request $request, $id): JsonResponse
    {
        $project = HomeProject::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:5120',
            'image_url' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $imagePath = $this->handleImageUpload($request, $project->image);

        $project->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image' => $imagePath,
            'link' => $request->input('link', $project->link),
            'sort_order' => $request->input('sort_order', $project->sort_order),
            'is_active' => $request->input('is_active', $project->is_active),
        ]);

        return response()->json(['message' => 'Project updated successfully.', 'project' => $project]);
    }

    public function destroyProject($id): JsonResponse
    {
        $project = HomeProject::findOrFail($id);
        $project->delete();

        return response()->json(['message' => 'Project deleted successfully.']);
    }
}
