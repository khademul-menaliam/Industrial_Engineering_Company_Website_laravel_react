<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key constraints to safely truncate tables
        Schema::disableForeignKeyConstraints();
        
        DB::table('home_settings')->truncate();
        DB::table('home_projects')->truncate();
        DB::table('home_competencies')->truncate();
        DB::table('home_leaders')->truncate();
        DB::table('home_processes')->truncate();
        DB::table('home_services')->truncate();
        DB::table('home_slides')->truncate();
        
        Schema::enableForeignKeyConstraints();

        $now = now();

        // Seed Slides
        DB::table('home_slides')->insert([
            [
                'title' => 'Your Vision, Our Engineering',
                'subtitle' => 'Providing innovative industrial engineering solutions',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-6-3cLDaU4VnChB7GYvXsbKGYaUSQp89TQMzPFB2mzN9h-twN_Ik0ERIwTHZl893AhxwYuDeJBpUz_Te3v4QodSCkIvOPT4LnqBzdD0xXzqao4xu7LGVMFi8uDk1RBAsAJ8WD6DoBrWMGYs0GS3ublBRyMlah8JfpIBCDpwl9bHchg3y6SZtECGaEZkc2Mq0LVkK9FWsDRzeGdczTiwZ-nDj601wiOgkjf4xBXx3abFizvqvfErfR',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Consulting & Projects',
                'subtitle' => 'Expertise in MEP design, simulation, and installations.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZE8ooXcXGVdrAES5GxRjh2CbqkMapDOF7dPJO0EizqB5HwnYkoP812ufBh9eDJLrWeOc9HJFtnI7OGWxseciPJNt_tlS7z419VPOkGA7HM6htH-CeHOzR9fEGL59fSKItgd4SctPKTUVbJoU7g9DqjJw8JwJ8hhF2UQYz2eCXKhp61qfcNiLRBfBWi9L8ZxPisTO8hwxpoh-sP-exJvu6JnUbPrhtHvqUh9zGIYvbtTTvpk-ixIR8',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Maintenance & Services',
                'subtitle' => 'Reliable support for all industrial systems.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxNuCaKpqaQ6E_QgXmtqTDHTvGXSdnnvvUJhny8QurhM1VLR9QtwmeNmgxJmmQGNGurQTtjdzuPdr5aMD0-URR7PfF2vAQhZgWb1BZCnPSgjZvBaWwULpTylYeYxN8r0ZBpATwKE45Bl_c-Qcpm-ovPo7p4HEl4siRfB-mp3IpftkCDbGlo1ucRsd6ZBCoNGk6AHGDtxAe3puRuacOxzOvTDoEUC7ll8mcbLudulRlfK6i1eEB-Wqa',
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // Seed Services
        DB::table('home_services')->insert([
            [
                'title' => 'Fire Pump Installation',
                'description' => 'Design, installation, testing, and maintenance of high-capacity fire pump systems.',
                'icon' => 'water_pump',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg0x0pxkxgg0rtFFIO8i69_V8VFWIbgw0QqilVEdA3jX4IXTZ1E7iPvtuxuB3z6sXBrpt9U7zRlrCYnn3AxOBvBHSpRGsZt_Mk8DesaccDqjNZa_DiDPQtWhHmjlMP1fmyvWkAFlO8qjebSmY93JMxn-80EMDGHFt9Ng2OaKUM-7gcoRk6XxcDr1Ytu6mIzkZf45OF2s2MKoOrNFbqu5wyJ3LGBpiUmfeYE6IAqJvptq5zrUkIykc9',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Building Fire Safety',
                'description' => 'Comprehensive protection including alarms, extinguishers, and safety compliance audits.',
                'icon' => 'detector_smoke',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8TMNnh_z6WYJ9BXosvX7O3z4QkdY2nvc0lCaDRwFf1nHXFEMR3cleXU7Bg3_AGNILdNp_DMUhqpjrGBNLlhEM9u7SF3X2_Yc-h-agp_brp65Hk9rRie2STvKdK8YbPqc8KGhkE9hDaNXrof2DW3HN0tvolGCDXL8_KR8VrHC3xiC9Xv3Nq1NIHM8uIAi8UuwpQ79QiYesouoD3sFSBnqhoIMJJ00qj6oUg-71-yc9_9o3LngpOViy',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Industrial Engineering',
                'description' => 'MEP engineering, mechanical installation, and full-scale industrial project management.',
                'icon' => 'engineering',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0iBq4U9Ob2bakYJjedylfY3JyshBX-dcna1FGgcEc9X-Rdq2TCHh4OJi_s6BfJjolKnFK9NJmx0w8etv8aQydgoYpAHXPK_yE26lS8d4t98TGtegaIUA13e-OIs8GCKJeD0TN7Eeck8IuSwS2pPLgvHaWbQwq6f1eXm1bk3DURTW3Rsc62yOGBbWRnRLvXozeI7rqOqbsqccG-IwSiwsCpj5GcQSRuxXdIB83U0-RViYeE8y17IL',
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // Seed Processes (Operational Methodology)
        DB::table('home_processes')->insert([
            [
                'step_number' => '01',
                'title' => 'Consultation',
                'description' => 'Risk assessment & site analysis',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'step_number' => '02',
                'title' => 'Design',
                'description' => 'CAD modeling & system engineering',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'step_number' => '03',
                'title' => 'Installation',
                'description' => 'Precision mechanical deployment',
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'step_number' => '04',
                'title' => 'Inspection',
                'description' => 'Rigorous safety compliance auditing',
                'sort_order' => 4,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'step_number' => '05',
                'title' => 'Maintenance',
                'description' => 'Ongoing 24/7 technical oversight',
                'sort_order' => 5,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // Seed Leaders
        DB::table('home_leaders')->insert([
            [
                'name' => 'David Richardson',
                'title' => 'Chief Executive Officer',
                'quote' => 'Our mission is simple: to provide the structural foundation upon which global industries can thrive. Precision is not just a goal; it is our standard.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Dr. Elena Vance',
                'title' => 'Senior Strategic Advisor',
                'quote' => 'The complexity of modern engineering requires a blend of traditional expertise and digital foresight. We provide that equilibrium.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6BlPBCRMJPlatpTIEpHMp_Qin1P514yu10fGxWT8RCgzgoxzfNiAixjZyyzruYkGHVQ5RjH0OBEc_KxD_hB3qcSwgxBXfCTdz75xqcQlWtmJnDVoVu7OJ9_8DQHmlEU1UMzGztma2yOZJNdmDHaGbntYYSAK2eccHc0A0NiIuJRImByMag29_G6K1EVot-b3ZHvp7O_PPDZ8Lu7dPLc2J8a7Q4Qw5LAllNFz5l83u3GMtrCZy6h2wdw',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // Seed Competencies
        DB::table('home_competencies')->insert([
            [
                'title' => 'Fire Safety & MEP',
                'items' => json_encode(['Advanced Suppression', 'NFPA Compliance Audits', 'Fire Load Management']),
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2K5DCzWYlO07uOYDok6Z-dcMMzyG-kVsbnogZ30SHtmVodPWrDys0vB8s5ILkFdnBbnIfPrgj9-osvMp5jpQyB-bmaE44XAiJhZdCwp6EYjKlMqrmT7c-sfj9RaB-dGSX5vDEo_pO2uqQLYApNb840hETNczsKSHe4g0AzEnd6Qf5Drx0xfoigGsjwFBuM15NK9st-lYEbNiZRS68CLYi60ZS4zHIpAmn89gWeAKB37gRzVouecvT7w',
                'button_text' => 'Critical Spec',
                'button_link' => '/services',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Structural Systems',
                'items' => json_encode(['Seismic Load Analysis', 'Steel Optimization', 'Deep Foundation Design']),
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMVvYGqkxmARyUhVBYUegQTjy1kHkfLD-6pA155F0A41_aBUXxMT0gllzEo0V-QIxhjX-FVahEGRl2Zl0_SAFzozf4VBiBcli6hz6v-zTW6qnkplLFTBf7YqXPHH5IdvTeZHEHsL2n6qeAMsmxcRMSN1PJPJWUz30rdIsCsC-KNJGvkJD1KNvuyyNBFyTWcxUh8HJAdxeqACMQ2KpWhnwxmdjE18EJWdun_z_ADbdtmdCu-ooWPTOf-A',
                'button_text' => 'View Details',
                'button_link' => '/services',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Robotics & Automation',
                'items' => json_encode(['PLC/SCADA Integration', 'Robotic Workflow Design', 'Process Optimization']),
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-kiJZgpt5bmFb5IQlPoyomn5YImZS06iSjadtCLU_WF2l3BlxszFEeJt-lE62iANDJfOcODa5aMCltdX5MjNX8eNNxPzent96l66MChTGi7LJZm7sqOOYpxsDVf0gU5yJaP3Dj5leVzL3tSEw3-Eoaz6ztMIO0LISR9zdw8qHdAFtdmimLk_DTitWiYit31F-_aJjLyhI_6YNJVsaElnBJYhBrQxcDw8MnmVKNDMm4KniXxzAhKnB2Q',
                'button_text' => 'View Details',
                'button_link' => '/services',
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // Seed Projects
        DB::table('home_projects')->insert([
            [
                'title' => 'Petrochemical Facility Upgrade',
                'description' => 'Comprehensive overhaul of fire suppression and MEP systems for a 500,000 sq ft facility.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiQWpv_p1aKDB5L30gax4kmYeHVcmoem0ojGb8FtL8ekHEYNj6pvcUHul3vjwoCFvqjMke7gwjveP9xHrxXRbSA1E-LdOVgN8Rl_K3JiBE0tWdQfX86UDURnLG7lYWNw6XxqiAOqjOe0LCQ1zxQkSurK8gw6lgBV_lZrZaL6rhDCA8VkYr4bXnrpM7ZCDBGJo6qnswyN6-9f5uJ4WyScN3BsEDuybQBRdB3xjopadZOAhoCSFK6muG',
                'link' => '/portfolio',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'title' => 'Automotive Assembly Line Automation',
                'description' => 'Integration of advanced robotics and structural support systems to increase throughput by 40%.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYSmVPZna91lP23HEHLg0N3b1_fhKs5jzK7vwSQwp01S3Q1SN0TjuDdDDVvouGKz3zBmKHyZzqhGMj8P0koc_UUKX5GGaxHDp3mVwqyoqtF5zZyMSa9HY2r1ASu1XZjAqoc8fX1A2IUmS3Z7n_Kg_ohFcVzjUXeb7sOKhbT0qgB4EJsIbMKxcWgy5MABVyD3R5zA_PY3c9_qNnhiLXPzhxLDHa7SaTepFypdlQZQIuBFQuNHI63HDS',
                'link' => '/portfolio',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);

        // Seed General Settings
        $settings = [
            'capabilities_section_title' => 'Core Engineering Capabilities',
            'capabilities_section_subtitle' => 'Engineered for absolute reliability in the most demanding industrial sectors.',
            'process_section_title' => 'Operational Methodology',
            'leadership_section_title' => 'Strategic Leadership',
            'leadership_section_subtitle' => 'Providing visionary guidance for complex industrial and structural challenges globally.',
            'competencies_section_title' => 'Core Competencies',
            'competencies_section_subtitle' => 'Comprehensive engineering specialized for the most demanding industrial environments.',
            'projects_section_title' => 'Featured Projects',
            'projects_section_subtitle' => 'Demonstrated excellence in large-scale industrial deployments.',
            'clients_section_title' => 'Trusted by Global Industry Leaders',
            'clients_list' => json_encode(['AERO-DYNAMICS', 'GLOBAL STEEL', 'NEXUS PETRO', 'TITAN MOTORS', 'HELIOS ENERGY']),
            'contact_section_title' => 'Request a Consultation',
            'contact_section_description' => 'Partner with our elite engineering team to secure and optimize your industrial operations. Fill out the form below to initiate a preliminary project assessment.',
            'contact_headquarters_address' => "400 Industrial Way, Suite 200\nDetroit, MI 48201",
            'contact_support_phone' => '1-800-TITAN-PRECISION',
            'cta_section_title' => 'READY FOR TITAN PRECISION?',
            'cta_section_subtitle' => 'Consult with our elite engineering team for high-stakes industrial solutions and structural integrity audits.',
            'cta_primary_btn_text' => 'Connect with Experts',
            'cta_primary_btn_link' => '/contact',
            'cta_secondary_btn_text' => 'Project Tender',
            'cta_secondary_btn_link' => '/contact',
        ];

        foreach ($settings as $key => $val) {
            DB::table('home_settings')->insert([
                'key' => $key,
                'value' => $val,
                'group' => 'general',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }
}
