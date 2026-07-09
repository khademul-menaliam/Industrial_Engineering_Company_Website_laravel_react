<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

// Authentication Routes
Route::get('/titan-secure/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/titan-secure/login', [AuthController::class, 'login']);
Route::match(['get', 'post'], '/titan-secure/logout', [AuthController::class, 'logout'])->name('logout');

// Protected Admin Routes (loads React Admin app)
Route::middleware(['auth'])->group(function () {
    Route::get('/titan-secure', function () {
        return view('admin');
    });
    Route::get('/titan-secure/{any}', function () {
        return view('admin');
    })->where('any', '.*');
});

// Frontend Routes (loads React Frontend app)
Route::get('/', function () {
    return view('frontend');
});
Route::get('/{any}', function () {
    return view('frontend');
})->where('any', '^(?!titan-secure).*$');
