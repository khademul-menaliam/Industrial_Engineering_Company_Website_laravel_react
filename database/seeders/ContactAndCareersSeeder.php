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
        // No truncation to prevent data loss on the server.
        $now = now();

        // 1. Seed Contact Settings
        $settings = [
            'contact_title' => 'CONTACT US',
            'contact_subtitle' => 'Connect with our team',
            'contact_urgent_title' => 'URGENT: SAFETY INQUIRY',
            'contact_urgent_description' => 'For immediate structural failure concerns or site safety hazards, use our priority channel.',
            'contact_urgent_btn' => 'PRIORITY RESPONSE',
            'contact_address' => "House-15, Road -1, Block-A\nMohanagar Project, West Rampura\nDhaka-1219, Bangladesh",
            'contact_phone' => '+880 1621 727549',
            'contact_phone_hours' => 'Mon - Fri: 8:00 AM - 6:00 PM CST',
            'contact_email' => 'service@arengineeringbd.com',
            'contact_map_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxU7jTojfIGAD6pxvJSGDir2eB2D-tRFcfxCAfIMdI8aTEwS8z1PbjiaCDajjAknsLj1zOS3AFQ_LpHUky4Tfe7YsTKCltIvvEyF2Jv6K1K9pxmT80GNP8Dr-6SQImvY8i-hOA8RsIHrlByMI2rbargNC0ELEb77OjQpUrDQ2DTd2zMwEVyifZ_amef2R4LVlIxQZcjmGAIG8VYZhK9e-GoybaRkNkN4g2wzmHI4rQb_vSBGE_re5Q3Q',
            'contact_response_time' => '< 12 HOURS',
            'contact_system_status' => 'OPERATIONAL',
        ];

        foreach ($settings as $key => $val) {
            DB::table('contact_settings')->updateOrInsert(
                ['key' => $key],
                [
                    'value' => $val,
                    'group' => 'general',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]
            );
        }

        // 2. Seed Vacancies
        $vacancies = [
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
        ];

        foreach ($vacancies as $v) {
            DB::table('vacancies')->updateOrInsert(
                ['ref' => $v['ref']],
                array_merge($v, ['updated_at' => $now])
            );
        }

        // Clean up old vacancies no longer in seeder
        $refs = array_column($vacancies, 'ref');
        DB::table('vacancies')->whereNotIn('ref', $refs)->delete();
    }
}
