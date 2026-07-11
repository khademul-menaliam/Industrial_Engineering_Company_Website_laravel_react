<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Faq;

class FaqManagerController extends Controller
{
    public function index()
    {
        $faqs = Faq::orderBy('order', 'asc')->paginate(10);
        return response()->json([
            'success' => true,
            'data' => $faqs
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
            'is_active' => 'boolean',
            'order' => 'integer'
        ]);

        $faq = Faq::create($validated);

        return response()->json([
            'success' => true,
            'data' => $faq,
            'message' => 'FAQ created successfully'
        ]);
    }

    public function update(Request $request, $id)
    {
        $faq = Faq::findOrFail($id);

        $validated = $request->validate([
            'question' => 'sometimes|string|max:255',
            'answer' => 'sometimes|string',
            'is_active' => 'boolean',
            'order' => 'integer'
        ]);

        $faq->update($validated);

        return response()->json([
            'success' => true,
            'data' => $faq,
            'message' => 'FAQ updated successfully'
        ]);
    }

    public function destroy($id)
    {
        $faq = Faq::findOrFail($id);
        $faq->delete();

        return response()->json([
            'success' => true,
            'message' => 'FAQ deleted successfully'
        ]);
    }
}
