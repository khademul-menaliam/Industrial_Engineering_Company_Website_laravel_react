<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Faq;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::where('is_active', true)
                   ->orderBy('order', 'asc')
                   ->get();

        return response()->json([
            'success' => true,
            'data' => $faqs
        ]);
    }
}
