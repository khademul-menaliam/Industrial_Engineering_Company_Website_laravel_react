<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ContactAndCareersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        DB::table('applications')->truncate();
        DB::table('vacancies')->truncate();
        DB::table('contact_inquiries')->truncate();
        DB::table('contact_settings')->truncate();

        Schema::enableForeignKeyConstraints();

        $now = now();

        // 1. Seed Contact Settings
        $settings = [
            'contact_title' => 'CONTACT US',
            'contact_subtitle' => 'Connect with our team',
            'contact_urgent_title' => 'URGENT: SAFETY INQUIRY',
            'contact_urgent_description' => 'For immediate structural failure concerns or site safety hazards, use our priority channel.',
            'contact_urgent_btn' => 'PRIORITY RESPONSE',
            'contact_address' => "1280 Engineering Plaza\nSuite 400, Industrial District\nChicago, IL 60601",
            'contact_phone' => '+1 (800) 555-0192',
            'contact_phone_hours' => 'Mon - Fri: 8:00 AM - 6:00 PM CST',
            'contact_email' => 'contact@titanprecision.com',
            'contact_map_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxU7jTojfIGAD6pxvJSGDir2eB2D-tRFcfxCAfIMdI8aTEwS8z1PbjiaCDajjAknsLj1zOS3AFQ_LpHUky4Tfe7YsTKCltIvvEyF2Jv6K1K9pxmT80GNP8Dr-6SQImvY8i-hOA8RsIHrlByMI2rbargNC0ELEb77OjQpUrDQ2DTd2zMwEVyifZ_amef2R4LVlIxQZcjmGAIG8VYZhK9e-GoybaRkNkN4g2wzmHI4rQb_vSBGE_re5Q3Q',
            'contact_response_time' => '< 12 HOURS',
            'contact_system_status' => 'OPERATIONAL',
        ];

        foreach ($settings as $key => $val) {
            DB::table('contact_settings')->insert([
                'key' => $key,
                'value' => $val,
                'group' => 'general',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // 2. Seed Vacancies
        DB::table('vacancies')->insert([
            [
                'ref' => 'AR-204',
                'title' => 'Senior Structural Engineer',
                'type' => 'Immediate',
                'description' => 'Leading high-rise structural analysis using advanced FEA modeling. Required: PE License, 10+ years experience.',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'ref' => 'AR-198',
                'title' => 'BIM Coordinator',
                'type' => 'Full-Time',
                'description' => 'Management of Revit models and multi-disciplinary coordination. ISO 19650 compliance oversight.',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'ref' => 'AR-312',
                'title' => 'Civil Project Manager',
                'type' => 'Contract',
                'description' => 'Direct site operations for infrastructure delivery. Focus on safety KPI and budget management.',
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
