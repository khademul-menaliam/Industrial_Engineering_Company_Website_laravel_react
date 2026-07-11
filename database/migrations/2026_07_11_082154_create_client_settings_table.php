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
        Schema::create('client_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->longText('value')->nullable();
            $table->timestamps();
        });

        $settings = [
            'hero_subtitle' => 'GLOBAL IMPACT • V2',
            'hero_title' => 'Strategic Partnerships',
            'hero_desc' => 'Collaborating with global industry leaders to engineer mission-critical solutions across aerospace, high-tech infrastructure, and sustainable energy.',
            'hero_bg' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvuTpPHQiUF8AWDoCwA4kqw_PO_GQciyHYZ8UcxUpNMoSTKtKgmeCsjUtPRy9N_6fmkTxz4wHWCiinoDWX5xGH3XndC_T9cZGpZR7GmNCH6bkTai9vH9HeYpxzDGiJaSE3nHS83YN11K6NdHITWQUDqojLbj9_zLg1jRpabOHsEcdKnNG5Gukd7eGD8EIz3yd68DpqgwQx9MU0oECY1nTFkgeWhf4LkQDGSzS0qckA3BZRYTyKCTQsTw',
            'clients_section_subtitle' => 'PARTNERS & CLIENTS',
            'clients_section_title' => 'Technical Ecosystem',
            'testimonials_section_title' => 'Engineering Trust',
            'cta_title' => 'Partner With Us',
            'cta_desc' => 'Whether you need structural validation, infrastructure design, or comprehensive site assessments, our engineering team is ready to assist.',
            'cta_button_text' => 'Get In Touch',
            'cta_button_link' => '/contact'
        ];

        foreach ($settings as $key => $value) {
            \DB::table('client_settings')->insert([
                'key' => $key,
                'value' => $value,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_settings');
    }
};
