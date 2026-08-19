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
        // No truncation to prevent data loss on the server.
        $now = now();

        // 1. Seed About Settings
        $settings = [
            'about_hero_title' => 'Precision Engineering',
            'about_hero_subtitle' => 'Established 2024 | AR Engineering',
            'about_hero_description' => 'Redefining industrial standards through high-precision structural integration and world-class fire safety protocols.',
            'about_hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVbKXiUA7xPQj89dhrbr0jwYhDX5VsLdm0HmboiN0rZ4hg1RvkMH0bI-J5rFE8TRFwJdRGB_XUn3gr-6XSyL23Lu571b5yjTu_-HmsPGozdp-J04pub88mCxNy7_rZQnfTcbNCy2XTGNax_kyDTlyNnrpnL8PoF2BZ6riibLJ3JDg9HaGU2yUSltzTu3hTVLcnRT8jqkwUMA0Y0GvL-OCjxpzEsVvLsQ0h5rO-HnnMso18KQDLdLgOqw',
            'about_story_title' => 'The Architecture of Excellence',
            'about_story_p1' => "Since our inception in May 2024, AR Engineering has operated at the critical intersection of structural integrity, digital innovation, and advanced life safety systems. Founded on the principle that modern engineering requires more than mechanical proficiency, we deliver holistic solutions for the complex technological ecosystems powering today's industrial landscape.",
            'about_story_p2' => 'Our specialized focus on fire safety engineering complements our core structural and mechanical competencies. By integrating fire suppression analytics and life safety protocols directly into the architectural phase, we ensure that safety is never an afterthought, but a fundamental pillar of design.',
            'about_story_p3' => "Today, we are a multi-disciplinary powerhouse. Our methodology integrates real-time data analytics with traditional fabrication, ensuring every project—from municipal infrastructure to high-risk industrial plants—meets the most rigorous standards of 21st-century compliance and technical precision.",
            'about_stat1_number' => '14',
            'about_stat1_label' => 'Core Team Specialists',
            'about_stat1_desc' => 'Experienced design, execution, structural, and mechanical engineers.',
            'about_stat2_number' => '20+',
            'about_stat2_label' => 'Industrial Clients',
            'about_stat2_desc' => 'Successfully delivering MEP, fire protection, and AMC services to major conglomerates.',
            'about_stat3_number' => '5+',
            'about_stat3_label' => 'Global Partners',
            'about_stat3_desc' => 'Strong strategic relationships with world-class technology manufacturers.',
            'about_ceo_name' => 'Engr. Md. Ashikur Rahman',
            'about_ceo_role' => 'FOUNDER & CEO',
            'about_ceo_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
            'about_ceo_message' => 'Welcome to AR Engineering. At AR Engineering, we believe that engineering is not only about designing systems—it is about creating safe, sustainable, and innovative solutions that add value to our clients and society. Since our establishment, we have remained committed to delivering precise, reliable, and high-performance engineering services with the highest standards of quality, integrity, and professionalism. Our expertise in Building Information Modeling (BIM), Mechanical, Electrical & Plumbing (MEP) engineering, Fire & Life Safety systems, industrial pump services, and other advanced engineering solutions enables us to serve a diverse range of industrial, commercial, and residential projects. We continuously strive to adopt modern technologies and international standards to ensure excellence in every aspect of our work. At AR Engineering, client satisfaction is our highest priority. We are dedicated to understanding our clients\' unique requirements and providing cost-effective, innovative, and sustainable solutions tailored to their needs. Our skilled team of engineers and technical professionals works tirelessly to ensure timely project delivery while maintaining the highest standards of safety and quality. As we move forward, we remain focused on building long-term partnerships based on trust, transparency, and mutual success. We sincerely thank our valued clients, partners, and stakeholders for their continued confidence and support. Together, we look forward to building a safer and more sustainable future.',
        ];

        foreach ($settings as $key => $val) {
            DB::table('about_settings')->updateOrInsert(
                ['key' => $key],
                [
                    'value' => $val,
                    'group' => 'general',
                    'created_at' => $now,
                    'updated_at' => $now,
                ]
            );
        }

        // 2. Seed Strategic Pillars
        $pillars = [
            [
                'title' => 'Mission',
                'icon' => 'rocket_launch',
                'description' => 'To deliver innovative, reliable, and high-performance engineering solutions that meet the evolving needs of industrial, commercial, and residential sectors through technical expertise, modern technologies, and continuous improvement.',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Vision',
                'icon' => 'visibility',
                'description' => 'To become a leading and globally recognized engineering company, renowned for technical excellence, innovation, and uncompromising commitment to quality and safety by adopting advanced technologies and sustainable practices.',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Values',
                'icon' => 'verified',
                'description' => 'Integrity, reliability, professionalism, and technical excellence. We hold ourselves accountable for every design, every simulation, and every safety protocol we deploy.',
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
        ];

        foreach ($pillars as $p) {
            DB::table('about_pillars')->updateOrInsert(
                ['title' => $p['title']],
                array_merge($p, ['updated_at' => $now])
            );
        }

        $pillarTitles = array_column($pillars, 'title');
        DB::table('about_pillars')->whereNotIn('title', $pillarTitles)->delete();

        // 3. Seed Advisors
        $advisors = [
            [
                'name' => 'Prof. Dr. Md. Shahidur Rahman',
                'role' => 'Advisor, AR Engineering (Professor, Dept. of Poultry Science, BAU)',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
                'message' => 'It is a privilege to be associated with AR Engineering as an Advisor. Since its inception, the company has demonstrated a remarkable commitment to excellence, innovation, and professional integrity in delivering engineering solutions. AR Engineering\'s expertise in BIM, MEP, Fire & Life Safety, and industrial engineering services reflects its dedication to quality, safety, and technological advancement.',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Prof. Dr. Md. Mizanur Rahman, CEngr',
                'role' => 'Advisor, AR Engineering (Professor, Dept. of Mechatronics Engineering, WUB)',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw',
                'message' => 'It is a great pleasure to be associated with AR Engineering, an organization that exemplifies innovation, professionalism, and engineering excellence. In today\'s rapidly advancing technological landscape, the demand for reliable and sustainable engineering solutions is greater than ever, and AR Engineering is well-positioned to meet these challenges with competence and integrity.',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Dr. Walton Wider',
                'role' => 'Distinguished Advisor, AR Engineering (Senior Lecturer, INTI International University, Malaysia)',
                'image' => null,
                'message' => 'It is a privilege to be associated with AR Engineering, an organization that exemplifies excellence, innovation, and professionalism in the field of engineering. In today\'s dynamic and rapidly evolving industrial landscape, the pursuit of quality, safety, and sustainability is essential, and AR Engineering continues to demonstrate a strong commitment to these values.',
                'sort_order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        foreach ($advisors as $a) {
            DB::table('about_advisors')->updateOrInsert(
                ['name' => $a['name']],
                array_merge($a, ['updated_at' => $now])
            );
        }

        $advisorNames = array_column($advisors, 'name');
        DB::table('about_advisors')->whereNotIn('name', $advisorNames)->delete();

        // 4. Seed Team Members
        $team = [
            [
                'name' => 'Engr. Md. Ashikur Rahman',
                'role' => 'Founder & CEO',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
                'bio' => 'PhD in Mechanical Engineering. Field Specialization: Natural Ventilation System, VRF, Fire Protection System (Active & passive), Drying Technology, Ansys Simulation.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'ashikboss7@gmail.com',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Songram Sardar',
                'role' => 'Manager (Commercial & Execution)',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw',
                'bio' => 'B.Sc in Industrial Engineering & Management from BGMEA University & Technology (BUFT).',
                'linkedin' => 'https://linkedin.com',
                'email' => 's.sardar@arengineeringbd.com',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'S.S.M Minhajul Mohaimin',
                'role' => 'Manager (Project Development)',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvuTpPHQiUF8AWDoCwA4kqw_PO_GQciyHYZ8UcxUpNMoSTKtKgmeCsjUtPRy9N_6fmkTxz4wHWCiinoDWX5xGH3XndC_T9cZGpZR7GmNCH6bkTai9vH9HeYpxzDGiJaSE3nHS83YN11K6NdHITWQUDqojLbj9_zLg1jRpabOHsEcdKnNG5Gukd7eGD8EIz3yd68DpqgwQx9MU0oECY1nTFkgeWhf4LkQDGSzS0qckA3BZRYTyKCTQsTw',
                'bio' => 'B.Sc in Electrical & Electronic Engineering from Varendra University, Rajshahi.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'm.mohaimin@arengineeringbd.com',
                'sort_order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Rashaduzzaman Rony',
                'role' => 'Manager (Design & Development)',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH0Yt5P09qX-6kP7R3K8J46G0fC8XJm-b_T_cZ2r_GjZ-6Xy7r9sT2Xm9vT5r9y_z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5',
                'bio' => 'B.Sc in Civil Engineering from Sonargaon University, Dhaka.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'r.rony@arengineeringbd.com',
                'sort_order' => 4,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Atiqur Rahman',
                'role' => 'Project Co-Ordinator',
                'image' => null,
                'bio' => 'B.Sc in Mechanical Engineering from IUBAT-International University of Business Agriculture and Technology.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'a.rahman@arengineeringbd.com',
                'sort_order' => 5,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Rezaul Karim',
                'role' => 'Manager (Sales & Marketing)',
                'image' => null,
                'bio' => 'B.Sc in Civil Engineering from Uttara University, Dhaka.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'r.karim@arengineeringbd.com',
                'sort_order' => 6,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Bristi Baydha',
                'role' => 'Executive (HR & Admin)',
                'image' => null,
                'bio' => 'BA Hons from National University, Bangladesh.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'b.baydha@arengineeringbd.com',
                'sort_order' => 7,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Khademul Islam',
                'role' => 'Executive (IT & Web Development)',
                'image' => null,
                'bio' => 'B.Sc in Computer Science & Engineering from DIU-Dhaka International University.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'k.islam@arengineeringbd.com',
                'sort_order' => 8,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Julian Arko Biswas',
                'role' => 'Executive (Project)',
                'image' => null,
                'bio' => 'Diploma in Electronic Technology from TTC, Barishal.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'j.biswas@arengineeringbd.com',
                'sort_order' => 9,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Omar Faruq Mamun',
                'role' => 'Senior Technician (Industrial Pump)',
                'image' => null,
                'bio' => 'Training: KSB Pump, India. Experience: 28 Years.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'o.mamun@arengineeringbd.com',
                'sort_order' => 10,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Sohag Khan',
                'role' => 'Supervisor (Fire Protection System)',
                'image' => null,
                'bio' => 'Education: HSC in Vocational Education. Training: Fire Service & Civil Defence. Experience: 16 Years.',
                'linkedin' => 'https://linkedin.com',
                'email' => 's.khan@arengineeringbd.com',
                'sort_order' => 11,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Raqib Talukdar',
                'role' => 'Senior Technician (Fire Protection System)',
                'image' => null,
                'bio' => 'Education: HSC in Vocational Education. Experience: 8 Years.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'r.talukdar@arengineeringbd.com',
                'sort_order' => 12,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Nazrul Islam',
                'role' => 'Senior Technician (Diesel Engine)',
                'image' => null,
                'bio' => 'Education: HSC in Vocational Education. Experience: 50 Years.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'n.islam@arengineeringbd.com',
                'sort_order' => 13,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Md. Rony Ahmed',
                'role' => 'Executive (Transportation)',
                'image' => null,
                'bio' => 'Education: BBA Hons from National University, Bangladesh.',
                'linkedin' => 'https://linkedin.com',
                'email' => 'r.ahmed@arengineeringbd.com',
                'sort_order' => 14,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        foreach ($team as $t) {
            DB::table('about_team')->updateOrInsert(
                ['name' => $t['name']],
                array_merge($t, ['updated_at' => $now])
            );
        }

        $teamNames = array_column($team, 'name');
        DB::table('about_team')->whereNotIn('name', $teamNames)->delete();

        // 5. Seed Milestones
        $milestones = [
            [
                'year' => '2024',
                'title' => 'Establishment & Foundation',
                'desc' => 'AR Engineering was established in May 2024 by Engr. Md. Ashikur Rahman with a vision to provide innovative, reliable, and high-quality engineering solutions to industrial, commercial, and residential sectors.',
                'sort_order' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'year' => '2025',
                'title' => 'Expanded Engineering Solutions',
                'desc' => 'Diversified into MEP design, Building Information Modeling (BIM), Fire & Life Safety systems, industrial pump services, HVAC, and ANSYS simulations.',
                'sort_order' => 2,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'year' => '2026',
                'title' => 'National & Global Collaborations',
                'desc' => 'Partnering with global manufacturers (FIREX, NITTAN, NAFFCO, Lackeby) and consulting for major garment groups and industrial giants in Bangladesh.',
                'sort_order' => 3,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        foreach ($milestones as $m) {
            DB::table('about_milestones')->updateOrInsert(
                ['year' => $m['year']],
                array_merge($m, ['updated_at' => $now])
            );
        }

        $milestoneYears = array_column($milestones, 'year');
        DB::table('about_milestones')->whereNotIn('year', $milestoneYears)->delete();
    }
}
