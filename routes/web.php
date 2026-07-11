<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\Admin\ServiceController as AdminServiceController;

// Dynamic Contact & Careers Controllers
use App\Http\Controllers\ContactPageController;
use App\Http\Controllers\CareersPageController;
use App\Http\Controllers\Admin\ContactManagerController as AdminContactManagerController;
use App\Http\Controllers\Admin\CareersManagerController as AdminCareersManagerController;

// Dynamic About Page Controllers
use App\Http\Controllers\AboutPageController;
use App\Http\Controllers\Admin\AboutManagerController as AdminAboutManagerController;

// FAQ Controllers
use App\Http\Controllers\FaqController;
use App\Http\Controllers\Admin\FaqManagerController as AdminFaqManagerController;

// Client Controllers
use App\Http\Controllers\ClientPageController;
use App\Http\Controllers\Admin\ClientManagerController as AdminClientManagerController;

// Public API Routes
Route::get('/api/home', [HomeController::class, 'index']);
Route::get('/api/services', [ServiceController::class, 'index']);
Route::get('/api/services/{slug}', [ServiceController::class, 'show']);

// Public Dynamic Contact & Careers API Routes
Route::get('/api/contact', [ContactPageController::class, 'index']);
Route::post('/api/contact/submit', [ContactPageController::class, 'submit']);
Route::get('/api/careers', [CareersPageController::class, 'index']);
Route::post('/api/careers/apply', [CareersPageController::class, 'apply']);

// Public Dynamic About API Route
Route::get('/api/about', [AboutPageController::class, 'index']);

// Public FAQ API Route
Route::get('/api/faqs', [FaqController::class, 'index']);

// Public Client API Route
Route::get('/api/clients', [ClientPageController::class, 'index']);

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

    // Secure API endpoints for Admin Contact Manager
    Route::prefix('api/admin/contact')->group(function () {
        Route::get('/', [AdminContactManagerController::class, 'index']);
        Route::post('/settings', [AdminContactManagerController::class, 'updateSettings']);
        Route::delete('/inquiries/{id}', [AdminContactManagerController::class, 'destroyInquiry']);
    });

    // Secure API endpoints for Admin Careers Manager
    Route::prefix('api/admin/careers')->group(function () {
        Route::get('/', [AdminCareersManagerController::class, 'index']);
        Route::post('/vacancies', [AdminCareersManagerController::class, 'storeVacancy']);
        Route::post('/vacancies/{id}', [AdminCareersManagerController::class, 'updateVacancy']);
        Route::delete('/vacancies/{id}', [AdminCareersManagerController::class, 'destroyVacancy']);
        Route::delete('/applications/{id}', [AdminCareersManagerController::class, 'destroyApplication']);
    });

    // Secure API endpoints for Admin About Manager
    Route::prefix('api/admin/about')->group(function () {
        Route::get('/', [AdminAboutManagerController::class, 'index']);
        Route::post('/settings', [AdminAboutManagerController::class, 'updateSettings']);
        
        // Pillars CRUD
        Route::post('/pillars', [AdminAboutManagerController::class, 'storePillar']);
        Route::post('/pillars/{id}', [AdminAboutManagerController::class, 'updatePillar']);
        Route::delete('/pillars/{id}', [AdminAboutManagerController::class, 'destroyPillar']);

        // Advisors CRUD
        Route::post('/advisors', [AdminAboutManagerController::class, 'storeAdvisor']);
        Route::post('/advisors/{id}', [AdminAboutManagerController::class, 'updateAdvisor']);
        Route::delete('/advisors/{id}', [AdminAboutManagerController::class, 'destroyAdvisor']);

        // Team CRUD
        Route::post('/team', [AdminAboutManagerController::class, 'storeTeamMember']);
        Route::post('/team/{id}', [AdminAboutManagerController::class, 'updateTeamMember']);
        Route::delete('/team/{id}', [AdminAboutManagerController::class, 'destroyTeamMember']);

        // Milestones CRUD
        Route::post('/milestones', [AdminAboutManagerController::class, 'storeMilestone']);
        Route::post('/milestones/{id}', [AdminAboutManagerController::class, 'updateMilestone']);
        Route::delete('/milestones/{id}', [AdminAboutManagerController::class, 'destroyMilestone']);
    });

    // Secure API endpoints for Admin FAQ Manager
    Route::prefix('api/admin/faqs')->group(function () {
        Route::get('/', [AdminFaqManagerController::class, 'index']);
        Route::post('/', [AdminFaqManagerController::class, 'store']);
        Route::post('/{id}', [AdminFaqManagerController::class, 'update']);
        Route::delete('/{id}', [AdminFaqManagerController::class, 'destroy']);
    });

    // Secure API endpoints for Admin Client Manager
    Route::prefix('api/admin/clients')->group(function () {
        // Settings
        Route::get('/settings', [AdminClientManagerController::class, 'getSettings']);
        Route::post('/settings', [AdminClientManagerController::class, 'updateSettings']);
        
        // Testimonials
        Route::get('/testimonials', [AdminClientManagerController::class, 'getTestimonials']);
        Route::post('/testimonials', [AdminClientManagerController::class, 'storeTestimonial']);
        Route::post('/testimonials/{id}', [AdminClientManagerController::class, 'updateTestimonial']);
        Route::delete('/testimonials/{id}', [AdminClientManagerController::class, 'destroyTestimonial']);

        // Clients
        Route::get('/', [AdminClientManagerController::class, 'index']);
        Route::post('/', [AdminClientManagerController::class, 'store']);
        Route::post('/{id}', [AdminClientManagerController::class, 'update']);
        Route::delete('/{id}', [AdminClientManagerController::class, 'destroy']);
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
