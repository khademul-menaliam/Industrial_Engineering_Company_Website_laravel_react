<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Home Slides
        Schema::create('home_slides', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('subtitle');
            $table->text('image');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 2. Home Services (Capabilities)
        Schema::create('home_services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('icon')->default('engineering');
            $table->text('image')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 3. Home Operational Methodology (Processes)
        Schema::create('home_processes', function (Blueprint $table) {
            $table->id();
            $table->string('step_number');
            $table->string('title');
            $table->text('description');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 4. Home Leadership Profiles
        Schema::create('home_leaders', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->text('quote');
            $table->text('image');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 5. Home Competencies
        Schema::create('home_competencies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->json('items');
            $table->text('image');
            $table->string('button_text')->default('View Details');
            $table->string('button_link')->default('/services');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 6. Home Featured Projects
        Schema::create('home_projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('image');
            $table->string('link')->default('/portfolio');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 7. General Home Settings (key-value store)
        Schema::create('home_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('group')->default('general');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_settings');
        Schema::dropIfExists('home_projects');
        Schema::dropIfExists('home_competencies');
        Schema::dropIfExists('home_leaders');
        Schema::dropIfExists('home_processes');
        Schema::dropIfExists('home_services');
        Schema::dropIfExists('home_slides');
    }
};
