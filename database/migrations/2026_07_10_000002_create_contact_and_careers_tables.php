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
        // 1. contact_settings table
        Schema::create('contact_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('group')->default('general');
            $table->timestamps();
        });

        // 2. contact_inquiries table
        Schema::create('contact_inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('department');
            $table->text('details');
            $table->timestamps();
        });

        // 3. vacancies table
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->string('ref');
            $table->string('title');
            $table->string('type'); // Immediate, Full-Time, Contract, Internship
            $table->text('description');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 4. applications table
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('position');
            $table->string('linkedin')->nullable();
            $table->string('dossier_path')->nullable();
            $table->text('summary')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
        Schema::dropIfExists('vacancies');
        Schema::dropIfExists('contact_inquiries');
        Schema::dropIfExists('contact_settings');
    }
};
