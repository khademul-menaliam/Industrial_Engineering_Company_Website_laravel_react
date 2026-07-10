<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        DB::table('about_milestones')->truncate();
        DB::table('about_team')->truncate();
        DB::table('about_advisors')->truncate();
        DB::table('about_pillars')->truncate();
        DB::table('about_settings')->truncate();

        Schema::enableForeignKeyConstraints();

        $now = now();

        // 1. Seed About Settings
        $settings = [
            'about_hero_title' => 'Precision Engineering',
            'about_hero_subtitle' => 'Established 2024 | Titan v2',
            'about_hero_description' => 'Redefining industrial standards through high-precision structural integration and world-class fire safety protocols.',
            'about_hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVbKXiUA7xPQj89dhrbr0jwYhDX5VsLdm0HmboiN0rZ4hg1RvkMH0bI-J5rFE8TRFwJdRGB_XUn3gr-6XSyL23Lu571b5yjTu_-HmsPGozdp-J04pub88mCxNy7_rZQnfTcbNCy2XTGNax_kyDTlyNnrpnL8PoF2BZ6riibLJ3JDg9HaGU2yUSltzTu3hTVLcnRT8jqkwUMA0Y0GvL-OCjxpzEsVvLsQ0h5rO-HnnMso18KQDLdLgOqw',
            'about_story_title' => 'The Architecture of Excellence',
            'about_story_p1' => "Since our inception in early 2024, Titan Precision has operated at the critical intersection of structural integrity, digital innovation, and advanced life safety systems. Founded on the principle that modern engineering requires more than mechanical proficiency, we deliver holistic solutions for the complex technological ecosystems powering today's industrial landscape.",
            'about_story_p2' => 'Our specialized focus on fire safety engineering complements our core structural and mechanical competencies. By integrating fire suppression analytics and life safety protocols directly into the architectural phase, we ensure that safety is never an afterthought, but a fundamental pillar of design.',
            'about_story_p3' => "Today, we are a multi-disciplinary powerhouse. Our methodology integrates real-time data analytics with traditional fabrication, ensuring every project—from municipal infrastructure to high-risk industrial plants—meets the most rigorous standards of 21st-century compliance and technical precision.",
            'about_stat1_number' => '50+',
            'about_stat1_label' => 'Elite Project Engineers',
            'about_stat1_desc' => 'PE licensed civil, mechanical, and fire suppression certified specialists.',
            'about_stat2_number' => '120+',
            'about_stat2_label' => 'Global Installations',
            'about_stat2_desc' => 'Successfully delivering industrial infrastructure solutions internationally.',
            'about_stat3_number' => '15',
            'about_stat3_label' => 'Compliance Patents',
            'about_stat3_desc' => 'Proprietary mathematical algorithms for fluid dynamics and safety zones.',
            'about_ceo_name' => 'Marcus Vance, PE',
            'about_ceo_role' => 'FOUNDER & CEO',
            'about_ceo_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
            'about_ceo_message' => 'At Titan Precision, our core mission is simple yet uncompromising: to design and deliver structural systems that prioritize human life and operational continuity. Modern industrial infrastructure demands rigorous calculations and zero tolerances. We hold ourselves responsible for every weld, every Revit block, and every thermal fluid dynamics simulation we deploy. We do not just build structures; we architect peace of mind.',
        ];

        foreach ($settings as $key => $val) {
            DB::table('about_settings')->insert([
                'key' => $key,
                'value' => $val,
                'group' => 'general',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // 2. Seed Strategic Pillars
        DB::table('about_pillars')->insert([
            [
                'title' => 'Mission',
                'icon' => 'rocket_launch',
                'description' => 'To provide high-precision engineering and safety solutions that accelerate global industrial progress through technical innovation and structural excellence.',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Vision',
                'icon' => 'visibility',
                'description' => 'To be the most trusted global partner in infrastructure engineering, redefining the limits of technical precision and safety in an evolving world.',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Values',
                'icon' => 'verified',
                'description' => 'Integrity, reliability, and precision. We hold ourselves accountable for every weld, every line of code, and every safety protocol we deploy.',
                'sort_order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Safety Policy',
                'icon' => 'local_fire_department',
                'description' => 'Uncompromising adherence to international fire safety frameworks and a total commitment to zero-defect execution in all life safety deliverables.',
                'sort_order' => 4,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // 3. Seed Advisors
        DB::table('about_advisors')->insert([
            [
                'name' => 'Dr. Aris Thorne',
                'role' => 'Senior Structural Advisor',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
                'message' => 'Engineering safety is an iterative process of mathematical validation and material stress audits. We build the science that keeps cities standing.',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Dame Clara Dupont',
                'role' => 'Industrial Compliance Advisor',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw',
                'message' => 'Compliance with NFPA and international ISO standards is not a checklist, but the blueprint of modern infrastructure. Trust is built on compliance.',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // 4. Seed Team Members
        DB::table('about_team')->insert([
            [
                'name' => 'Marcus Vance, PE',
                'role' => 'Founder & CEO',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
                'bio' => 'Over 20 years leading heavy structural designs and municipal seismic upgrades. Ex-member of National Fire Protection Association.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'm.vance@titanprecision.com',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Elena Rostova',
                'role' => 'Chief BIM Coordinator',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw',
                'bio' => 'Spearheads multi-disciplinary 3D CAD coordination and ISO 19650 compliance audits for high-density commercial complexes.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'e.rostova@titanprecision.com',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'David Kincaid, SE',
                'role' => 'VP of Safety Engineering',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvuTpPHQiUF8AWDoCwA4kqw_PO_GQciyHYZ8UcxUpNMoSTKtKgmeCsjUtPRy9N_6fmkTxz4wHWCiinoDWX5xGH3XndC_T9cZGpZR7GmNCH6bkTai9vH9HeYpxzDGiJaSE3nHS83YN11K6NdHITWQUDqojLbj9_zLg1jRpabOHsEcdKnNG5Gukd7eGD8EIz3yd68DpqgwQx9MU0oECY1nTFkgeWhf4LkQDGSzS0qckA3BZRYTyKCTQsTw',
                'bio' => 'Specialist in hazardous materials structural isolation, thermal dynamics modeling, and automatic deluge design systems.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'd.kincaid@titanprecision.com',
                'sort_order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Sarah Chen, PhD',
                'role' => 'Lead Material Analyst',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH0Yt5P09qX-6kP7R3K8J46G0fC8XJm-b_T_cZ2r_GjZ-6Xy7r9sT2Xm9vT5r9y_z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5',
                'bio' => 'Directs tensile strength and thermal stress testing for bespoke steel alloys. Author of 12 peer-reviewed safety publications.',
                'linkedin' => 'https://linkedin.com',
                'email' => 's.chen@titanprecision.com',
                'sort_order' => 4,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // 5. Seed Milestones
        DB::table('about_milestones')->insert([
            [
                'year' => '2024',
                'title' => 'Establishment & Foundation',
                'desc' => 'Titan Precision founded in Chicago, focusing on seismic structural integrations and high-rise core safety modeling.',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'year' => '2025',
                'title' => 'Fire Protection Expansion',
                'desc' => 'Launched dedicated Fire Protection & Life Safety division, obtaining ISO 9001 and ISO 19650 coordination status.',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'year' => '2026',
                'title' => 'International Operations',
                'desc' => 'Contracted for municipal structural and industrial hazard suppression deliverables across three global regional offices.',
                'sort_order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
