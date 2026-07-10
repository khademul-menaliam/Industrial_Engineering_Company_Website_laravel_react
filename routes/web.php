<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\Admin\ServiceController as AdminServiceController;

// Public API Routes
Route::get('/api/home', [HomeController::class, 'index']);
Route::get('/api/services', [ServiceController::class, 'index']);
Route::get('/api/services/{slug}', [ServiceController::class, 'show']);

// Authentication Routes
Route::get('/titan-secure/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/titan-secure/login', [AuthController::class, 'login']);
Route::match(['get', 'post'], '/titan-secure/logout', [AuthController::class, 'logout'])->name('logout');

// Protected Admin Routes (loads React Admin app)
Route::middleware(['auth'])->group(function () {
    // Secure API endpoints for Admin Homepage Manager
    Route::prefix('api/admin/home')->group(function () {
        Route::post('/settings', [AdminHomeController::class, 'updateSettings']);

        // Slides CRUD
        Route::post('/slides', [AdminHomeController::class, 'storeSlide']);
        Route::post('/slides/{id}', [AdminHomeController::class, 'updateSlide']);
        Route::delete('/slides/{id}', [AdminHomeController::class, 'destroySlide']);

        // Services CRUD
        Route::post('/services', [AdminHomeController::class, 'storeService']);
        Route::post('/services/{id}', [AdminHomeController::class, 'updateService']);
        Route::delete('/services/{id}', [AdminHomeController::class, 'destroyService']);

        // Processes CRUD
        Route::post('/processes', [AdminHomeController::class, 'storeProcess']);
        Route::post('/processes/{id}', [AdminHomeController::class, 'updateProcess']);
        Route::delete('/processes/{id}', [AdminHomeController::class, 'destroyProcess']);

        // Leaders CRUD
        Route::post('/leaders', [AdminHomeController::class, 'storeLeader']);
        Route::post('/leaders/{id}', [AdminHomeController::class, 'updateLeader']);
        Route::delete('/leaders/{id}', [AdminHomeController::class, 'destroyLeader']);

        // Competencies CRUD
        Route::post('/competencies', [AdminHomeController::class, 'storeCompetency']);
        Route::post('/competencies/{id}', [AdminHomeController::class, 'updateCompetency']);
        Route::delete('/competencies/{id}', [AdminHomeController::class, 'destroyCompetency']);

        // Projects CRUD
        Route::post('/projects', [AdminHomeController::class, 'storeProject']);
        Route::post('/projects/{id}', [AdminHomeController::class, 'updateProject']);
        Route::delete('/projects/{id}', [AdminHomeController::class, 'destroyProject']);
    });

    // Secure API endpoints for Admin Services Manager
    Route::prefix('api/admin/services')->group(function () {
        Route::get('/', [AdminServiceController::class, 'index']);
        Route::post('/settings', [AdminServiceController::class, 'updateSettings']);
        
        // Categories CRUD (literal routes first)
        Route::post('/categories', [AdminServiceController::class, 'storeCategory']);
        Route::post('/categories/{id}', [AdminServiceController::class, 'updateCategory']);
        Route::delete('/categories/{id}', [AdminServiceController::class, 'destroyCategory']);

        // Services CRUD (wildcard routes last)
        Route::post('/', [AdminServiceController::class, 'store']);
        Route::post('/{id}', [AdminServiceController::class, 'update']);
        Route::delete('/{id}', [AdminServiceController::class, 'destroy']);
    });

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
