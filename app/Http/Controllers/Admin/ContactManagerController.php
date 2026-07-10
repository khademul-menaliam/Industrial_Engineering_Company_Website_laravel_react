<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactInquiry;
use App\Models\ContactSetting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ContactManagerController extends Controller
{
    /**
     * Get settings and inquiries list.
     */
    public function index(): JsonResponse
    {
        $settings = ContactSetting::all()->pluck('value', 'key');
        $inquiries = ContactInquiry::orderBy('created_at', 'desc')->get();
        
        return response()->json([
            'success' => true,
            'settings' => $settings,
            'inquiries' => $inquiries
        ]);
    }

    /**
     * Bulk update contact settings.
     */
    public function updateSettings(Request $request): JsonResponse
    {
        $request->validate([
            'settings' => 'required|array',
        ]);

        foreach ($request->input('settings') as $key => $value) {
            ContactSetting::updateOrCreate(
                ['key' => $key],
                ['value' => $value, 'group' => 'general']
            );
        }

        return response()->json([
            'success' => true,
            'message' => 'Contact details updated successfully.'
        ]);
    }

    /**
     * Delete a contact inquiry.
     */
    public function destroyInquiry($id): JsonResponse
    {
        $inquiry = ContactInquiry::findOrFail($id);
        $inquiry->delete();

        return response()->json([
            'success' => true,
            'message' => 'Contact message removed successfully.'
        ]);
    }
}
