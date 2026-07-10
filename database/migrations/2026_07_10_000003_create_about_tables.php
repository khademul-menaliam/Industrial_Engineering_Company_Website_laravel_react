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
        // 1. about_settings table
        Schema::create('about_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('group')->default('general');
            $table->timestamps();
        });

        // 2. about_pillars table
        Schema::create('about_pillars', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('icon');
            $table->text('description');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 3. about_advisors table
        Schema::create('about_advisors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->text('image')->nullable();
            $table->text('message');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 4. about_team table (leadership team)
        Schema::create('about_team', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->text('image')->nullable();
            $table->text('bio');
            $table->string('linkedin')->nullable();
            $table->string('email')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 5. about_milestones table
        Schema::create('about_milestones', function (Blueprint $table) {
            $table->id();
            $table->string('year');
            $table->string('title');
            $table->text('desc');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_milestones');
        Schema::dropIfExists('about_team');
        Schema::dropIfExists('about_advisors');
        Schema::dropIfExists('about_pillars');
        Schema::dropIfExists('about_settings');
    }
};
