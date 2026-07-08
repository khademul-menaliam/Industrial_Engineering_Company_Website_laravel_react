<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

// Authentication Routes
Route::get('/admin/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/admin/login', [AuthController::class, 'login']);
Route::match(['get', 'post'], '/admin/logout', [AuthController::class, 'logout'])->name('logout');

// Protected Admin Routes (loads React Admin app)
Route::middleware(['auth'])->group(function () {
    Route::get('/admin', function () {
        return view('admin');
    });
    Route::get('/admin/{any}', function () {
        return view('admin');
    })->where('any', '.*');
});

// Frontend Routes (loads React Frontend app)
Route::get('/', function () {
    return view('frontend');
});
Route::get('/{any}', function () {
    return view('frontend');
})->where('any', '^(?!admin).*$');
