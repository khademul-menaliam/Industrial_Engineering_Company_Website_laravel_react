<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\HomeController as AdminHomeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider or bootstrap router.
|
*/

// Public Frontend API
Route::get('/home', [HomeController::class, 'index']);

// Protected Administrative API
Route::middleware(['auth'])->prefix('admin/home')->group(function () {
    // Settings bulk updates
    Route::post('/settings', [AdminHomeController::class, 'updateSettings']);

    // Slides CRUD
    Route::post('/slides', [AdminHomeController::class, 'storeSlide']);
    Route::post('/slides/{id}', [AdminHomeController::class, 'updateSlide']);
    Route::delete('/slides/{id}', [AdminHomeController::class, 'destroySlide']);

    // Services CRUD
    Route::post('/services', [AdminHomeController::class, 'storeService']);
    Route::post('/services/{id}', [AdminHomeController::class, 'updateService']);
    Route::delete('/services/{id}', [AdminHomeController::class, 'destroyService']);

    // Operational methodology processes CRUD
    Route::post('/processes', [AdminHomeController::class, 'storeProcess']);
    Route::post('/processes/{id}', [AdminHomeController::class, 'updateProcess']);
    Route::delete('/processes/{id}', [AdminHomeController::class, 'destroyProcess']);

    // Leadership CRUD
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
