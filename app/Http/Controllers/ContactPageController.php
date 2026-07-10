<?php

namespace App\Http\Controllers;

use App\Models\ContactInquiry;
use App\Models\ContactSetting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ContactPageController extends Controller
{
    /**
     * Get contact settings.
     */
    public function index(): JsonResponse
    {
        $settings = ContactSetting::all()->pluck('value', 'key');
        
        return response()->json([
            'success' => true,
            'settings' => $settings,
        ]);
    }

    /**
     * Submit a contact inquiry.
     */
    public function submit(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'department' => 'required|string|max:255',
            'details' => 'required|string',
        ]);

        $inquiry = ContactInquiry::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'department' => $request->input('department'),
            'details' => $request->input('details'),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Your safety or project inquiry has been transmitted successfully.',
            'inquiry' => $inquiry
        ]);
    }
}
