<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Create services table
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('category'); // consulting, dsi, maintenance
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('short_description')->nullable();
            $table->text('image')->nullable();
            $table->string('icon')->nullable();
            $table->string('tag')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            
            // Detail Page Fields
            $table->text('hero_image')->nullable();
            $table->string('detail_title')->nullable();
            $table->text('detail_description')->nullable();
            $table->string('badges')->nullable(); // comma-separated list
            $table->json('technical_specs')->nullable(); // JSON list
            $table->json('metrics')->nullable(); // JSON list
            
            $table->timestamps();
        });

        // 2. Create service_settings table
        Schema::create('service_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('group'); // intro, zero_downtime, cta
            $table->timestamps();
        });

        // 3. Seed default service_settings
        DB::table('service_settings')->insert([
            [
                'key' => 'services_intro_title',
                'value' => 'Operational Hierarchy',
                'group' => 'intro',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'services_intro_heading',
                'value' => 'Precision Engineering & Industrial Solutions',
                'group' => 'intro',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'services_intro_description',
                'value' => 'Deploying elite technical expertise across consulting, project execution, and lifecycle maintenance for mission-critical infrastructure.',
                'group' => 'intro',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zero_downtime_title',
                'value' => 'Zero-Downtime Maintenance',
                'group' => 'zero_downtime',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zero_downtime_description',
                'value' => 'Our maintenance protocols ensure maximum operational uptime through predictive diagnostics and rapid response engineering.',
                'group' => 'zero_downtime',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'zero_downtime_link',
                'value' => '/contact',
                'group' => 'zero_downtime',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'services_cta_title',
                'value' => 'Initiate Tactical Protocol',
                'group' => 'cta',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'services_cta_description',
                'value' => 'Deploy our rapid-response engineering team to evaluate your facility\'s integrity.',
                'group' => 'cta',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // 4. Seed default services
        DB::table('services')->insert([
            // --- 01. CONSULTING SERVICES ---
            [
                'category' => 'consulting',
                'slug' => 'mep-design',
                'title' => 'MEP Design',
                'short_description' => 'Mechanical, Electrical, and Plumbing engineering frameworks for complex industrial facilities.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCICZLoyMCGiXOcS-UHEMXZSuWXbunAvy2wujPrbbYI8ByVbaFm99njmbHxjPlgFe1Mc2TNbGeBjQeEoIjWDGoPPWZrph0Zx8eV73pnBdGu5eqIrADkarzXS96Lw9TdCOxqJXOX-br-M3l0gr6XOdjiN9YwDXUq7zPqd1v_-c5oVuduVScrFK2lPVHwvZuIy-aHucZsYZrmoIN11P8oqafMRO-UALJ06Os65wxVBqLFtCss67Lv092u',
                'icon' => 'architecture',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 1,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCICZLoyMCGiXOcS-UHEMXZSuWXbunAvy2wujPrbbYI8ByVbaFm99njmbHxjPlgFe1Mc2TNbGeBjQeEoIjWDGoPPWZrph0Zx8eV73pnBdGu5eqIrADkarzXS96Lw9TdCOxqJXOX-br-M3l0gr6XOdjiN9YwDXUq7zPqd1v_-c5oVuduVScrFK2lPVHwvZuIy-aHucZsYZrmoIN11P8oqafMRO-UALJ06Os65wxVBqLFtCss67Lv092u',
                'detail_title' => 'Mechanical, Electrical & Plumbing Frameworks',
                'detail_description' => 'High-performance architectural building systems design including detailed layout specifications, hydraulic calculations, power load balancing, and ductwork routing. Engineered for optimal energy efficiency and full ASHRAE compliance.',
                'badges' => 'ASHRAE Certified, BIM Integrated',
                'technical_specs' => json_encode([
                    ['label' => 'Standard', 'value' => 'ASHRAE / CIBSE Compliance', 'icon' => 'verified_user'],
                    ['label' => 'Design Software', 'value' => 'Autodesk Revit BIM', 'icon' => 'draw'],
                    ['label' => 'Load Calculations', 'value' => 'Carrier HAP Modeling', 'icon' => 'query_stats'],
                    ['label' => 'Lighting Design', 'value' => 'Dialux Evo Native', 'icon' => 'bolt']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Energy Savings Rate', 'percentage' => 35.0],
                    ['label' => 'Design Efficiency Index', 'percentage' => 95.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'consulting',
                'slug' => 'ansys-simulation',
                'title' => 'ANSYS Simulation',
                'short_description' => 'High-fidelity computational fluid dynamics and structural analysis for optimized system performance.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp73VC91xCR3iu5rI02d-fVKu1wT1adUxD-NM0gTY21x4Nalt8ormNMKMhwvkto-TQ2p7rcYs2UgXjDsLAEneed2yBYPAECiTSg-xLdHhJ1eOf-0bZnrlRz9MrgUh2RCTwPaYh7r-gtx8oR3TnNQmkHTDXDIUDFJz2YRJB6in6TIgmTSJYZ9hBsx5HhyB1rHDtaYFy2qRIRUdp1uW4Dh53xZfF2pAiVPUJzNOkDc-s-0IvcA9Cv0uf',
                'icon' => 'precision_manufacturing',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 2,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp73VC91xCR3iu5rI02d-fVKu1wT1adUxD-NM0gTY21x4Nalt8ormNMKMhwvkto-TQ2p7rcYs2UgXjDsLAEneed2yBYPAECiTSg-xLdHhJ1eOf-0bZnrlRz9MrgUh2RCTwPaYh7r-gtx8oR3TnNQmkHTDXDIUDFJz2YRJB6in6TIgmTSJYZ9hBsx5HhyB1rHDtaYFy2qRIRUdp1uW4Dh53xZfF2pAiVPUJzNOkDc-s-0IvcA9Cv0uf',
                'detail_title' => 'High-Fidelity FEA & CFD Analysis',
                'detail_description' => 'Advanced finite element analysis (FEA) and computational fluid dynamics (CFD) simulating real-world physical stresses and fluid behaviors. Optimizes structural integrity and aerodynamic efficiency prior to fabrication.',
                'badges' => 'ANSYS Fluent, Stress Tested',
                'technical_specs' => json_encode([
                    ['label' => 'CFD Solver', 'value' => 'ANSYS Fluent / CFX', 'icon' => 'waves'],
                    ['label' => 'Meshing Quality', 'value' => 'High-Density Hexahedral', 'icon' => 'grid_on'],
                    ['label' => 'Stress Analysis', 'value' => 'Static & Dynamic Linear/Non-linear', 'icon' => 'precision_manufacturing'],
                    ['label' => 'Compute Clusters', 'value' => 'High-Performance HPC Native', 'icon' => 'memory']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Structural Accuracy', 'percentage' => 99.8],
                    ['label' => 'Weight Optimization', 'percentage' => 22.5]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'consulting',
                'slug' => 'industrial-pump-systems',
                'title' => 'Industrial Pump Systems',
                'short_description' => 'Strategic consulting on fluid transport logistics and high-capacity pumping architectures.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmP04yL-RMwuEwFiuk0IErZyGVDtCZ2cR7MRrprpxCaVGUhJT5d3AzPrKSolwVZhu784CkNEokpmiC9lSeMvUJYhItt8Ro4d9m3BaPhIjnlDJIEj1INjugcXV3eQSzDF1HJz1iKXG3Mpy4DDumg0bH3gteWN9HoGDQXawTpot-t4wWGYmlndSJH7SkJC2Qze4J0sd3c3O6iBmZXHF7QWR3KCa7e1K1EHmxXNQp5j8uNs90MOWlljle',
                'icon' => 'water_damage',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 3,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmP04yL-RMwuEwFiuk0IErZyGVDtCZ2cR7MRrprpxCaVGUhJT5d3AzPrKSolwVZhu784CkNEokpmiC9lSeMvUJYhItt8Ro4d9m3BaPhIjnlDJIEj1INjugcXV3eQSzDF1HJz1iKXG3Mpy4DDumg0bH3gteWN9HoGDQXawTpot-t4wWGYmlndSJH7SkJC2Qze4J0sd3c3O6iBmZXHF7QWR3KCa7e1K1EHmxXNQp5j8uNs90MOWlljle',
                'detail_title' => 'Fluid Dynamics & Pumping Logistics',
                'detail_description' => 'Custom fluid dynamics consulting and high-capacity pump systems architecture design. Tailored for major industrial plants, municipal water plants, chemical processing facilities, and high-flow oil and gas operations.',
                'badges' => 'High-Flow Rated, API 610 Certified',
                'technical_specs' => json_encode([
                    ['label' => 'Pump Standards', 'value' => 'API 610 / ISO 5199', 'icon' => 'verified_user'],
                    ['label' => 'Flow Capabilities', 'value' => 'Up to 15,000 m³/h', 'icon' => 'water_pump'],
                    ['label' => 'Viscosity Handling', 'value' => 'High-Viscosity Slurry Rated', 'icon' => 'oil_barrel'],
                    ['label' => 'Cavitation Prevent', 'value' => 'NPSH Optimized Loops', 'icon' => 'security']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Pumping Efficiency', 'percentage' => 88.0],
                    ['label' => 'Uptime Guarantee', 'percentage' => 99.9]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'consulting',
                'slug' => 'gain-dryer-systems',
                'title' => 'Gain Dryer Systems',
                'short_description' => 'Engineering solutions for Flatbed Gain dryer systems tailored for agricultural and industrial processing.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtEf0k-IUO5vZukJ5LQ4at5GgoTBXoG3Yk3XULf2MB_Xg94PZYYniDls2NtW5ZCWl0eZxisxIMnu_8s95jlp4_H4OeD0ZEYmTbK7RcxScK7H84rZ31fnZExTI9YQGm9zJpHPNxO7hn6YNyvK6LkwjaVmYOapYcfz4S2TI5_xOmLLXuFJ59gjFDZM6SLnHmWo_mu2n8XO5SJs4xoD1qg7NGsGtQgGeMVaOa72nHD8PzdxARFFu6rNjY',
                'icon' => 'dry',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 4,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtEf0k-IUO5vZukJ5LQ4at5GgoTBXoG3Yk3XULf2MB_Xg94PZYYniDls2NtW5ZCWl0eZxisxIMnu_8s95jlp4_H4OeD0ZEYmTbK7RcxScK7H84rZ31fnZExTI9YQGm9zJpHPNxO7hn6YNyvK6LkwjaVmYOapYcfz4S2TI5_xOmLLXuFJ59gjFDZM6SLnHmWo_mu2n8XO5SJs4xoD1qg7NGsGtQgGeMVaOa72nHD8PzdxARFFu6rNjY',
                'detail_title' => 'Flatbed Grain Dryer Architectures',
                'detail_description' => 'Heavy-duty agricultural processing solutions focusing on custom flatbed grain dryer architectures. Designed to dry high volumes of grain efficiently with uniform temperature control and minimum fuel usage.',
                'badges' => 'Agri-Spec Rated, Uniform Temperature',
                'technical_specs' => json_encode([
                    ['label' => 'Dryer Type', 'value' => 'Flatbed Recirculating / Continuous', 'icon' => 'grid_view'],
                    ['label' => 'Thermal Source', 'value' => 'Biomass / LPG Burners', 'icon' => 'mode_heat'],
                    ['label' => 'Moisture Control', 'value' => 'Automated Telemetry Sensors', 'icon' => 'percent'],
                    ['label' => 'Air Distribution', 'value' => 'High-Velocity Axial Fans', 'icon' => 'air']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Moisture Uniformity', 'percentage' => 98.2],
                    ['label' => 'Thermal Efficiency', 'percentage' => 84.5]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'consulting',
                'slug' => 'natural-ventilation-systems',
                'title' => 'Natural Ventilation Systems',
                'short_description' => 'Passive airflow engineering and thermal chimney design for sustainable climate control solutions in high-scale environments.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwfNgtBC32UevUhZJHQGh8MP4GioRaxRGNyDm8sZpqzlPCIfI5E0PmFidSJRxwZcdLBNDFbHAE93BNJDmtFqnMIF9n6x756tDvuOicv-aEqJJKem3wK84pBrjzdDDSXdx9OUTpqCdzlp-M81945rfnUUlxXfxmSJWSg7zUCFW_SZV5r5lUbhiDgj3Lq87B9WqKZqT2kZoYYx84VcBfPG_jDbkcgUUeIS-vjPgNm0kT2R5I10Uvu12QSHekx5FuQG4KJ1mT2_Xr0YW2rw',
                'icon' => 'air',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 5,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwfNgtBC32UevUhZJHQGh8MP4GioRaxRGNyDm8sZpqzlPCIfI5E0PmFidSJRxwZcdLBNDFbHAE93BNJDmtFqnMIF9n6x756tDvuOicv-aEqJJKem3wK84pBrjzdDDSXdx9OUTpqCdzlp-M81945rfnUUlxXfxmSJWSg7zUCFW_SZV5r5lUbhiDgj3Lq87B9WqKZqT2kZoYYx84VcBfPG_jDbkcgUUeIS-vjPgNm0kT2R5I10Uvu12QSHekx5FuQG4KJ1mT2_Xr0YW2rw',
                'detail_title' => 'Passive Airflow Engineering & Thermal Chimneys',
                'detail_description' => 'Sustainable cooling engineering utilizing passive buoyancy-driven airflow and stack-effect thermal chimney designs. Decreases overall factory HVAC loads by exhausting hot air naturally through high-level vents.',
                'badges' => 'Eco-Ventilation, Zero Energy Cost',
                'technical_specs' => json_encode([
                    ['label' => 'Ventilation Concept', 'value' => 'Buoyancy Stack Effect', 'icon' => 'thermostat'],
                    ['label' => 'Hardware Specs', 'value' => 'Automatic Dampers & Louvers', 'icon' => 'settings'],
                    ['label' => 'Carbon Reduction', 'value' => 'Up to 40% HVAC Load Cut', 'icon' => 'eco'],
                    ['label' => 'Monitoring System', 'value' => 'PLC Integrated Air Quality Loops', 'icon' => 'cable']
                ]),
                'metrics' => json_encode([
                    ['label' => 'HVAC Carbon Reduction', 'percentage' => 40.0],
                    ['label' => 'Ventilation Efficacy', 'percentage' => 96.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // --- 02. PROJECTS (DSI) ---
            [
                'category' => 'dsi',
                'slug' => 'fire-protection-detection',
                'title' => 'Fire Protection & Detection',
                'short_description' => 'Full-cycle design, supply, and installation of advanced suppression and intelligence detection loops.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWJE-v-0uC5YaX0T-APoKQzTnHfJdootuqNi69Cli5_GSEL7Lx8hZ-EiFL4U19ssKxHZAanJmH5rdRioDDSmJz1N_jsyDzewISZAqVEEB3JoL6-S_KClpkrEzuA0FgimLaXHIuLPP6Gpl0EmEI70SN_N4-x1CS7Q8ztENdkzyrXHPNQDcNNSOSzFQwwXLdI71lAYUft7xxFg7NA6kbkI64SDLKxQii1n0I6Z-RB4I-rfN6fIaS4B3',
                'icon' => 'local_fire_department',
                'tag' => 'Tactical Asset',
                'is_featured' => true,
                'sort_order' => 1,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuApf1ZBNHgTH7cR0LfjP8EfKQRtI5-CKOUptgoA-5W-6kkWumSzoZ9gAJfmZ4VdbXb-L9B4jen5I3NP57Ppbisg8mnBGogfU92FnXbUbwYIiWTAJdaj6jYM_qBB0skOMPGEXGmc1QM7vHRYM95Ow208BpZieYh8Biyf08Z4fu9LtGWaLLn7EZBBlicQ4mSsix6dpSwqeeqkPf7W-kgtnT-dhnyPH3KzhlUOxSxVHrb-ikjZOOOx54Fg',
                'detail_title' => 'Engineering Precision & Redundancy',
                'detail_description' => 'Our specialized engineering teams deploy mission-critical fire safety infrastructure designed to operate autonomously under extreme conditions. Utilizing multi-sensor telemetry (thermal, optical, and chemical), our systems establish an active defense perimeter. Fail-safe redundancy is achieved via secondary mechanical triggers and decentralized control panels, ensuring suppression protocols initiate even during total facility power loss.',
                'badges' => 'Safe Mode Enabled, Dual-Loop Verified',
                'technical_specs' => json_encode([
                    ['label' => 'Standard', 'value' => 'NFPA 72 Compliance', 'icon' => 'verified_user'],
                    ['label' => 'Response Threshold', 'value' => '<12ms', 'icon' => 'timer'],
                    ['label' => 'System Coverage', 'value' => 'Up to 500k sq ft', 'icon' => 'aspect_ratio'],
                    ['label' => 'Integration Level', 'value' => 'PLC / SCADA Native', 'icon' => 'cable']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Detection Accuracy', 'percentage' => 99.9],
                    ['label' => 'Deployment Readiness', 'percentage' => 100.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'dsi',
                'slug' => 'hvac-systems',
                'title' => 'HVAC Systems',
                'short_description' => 'Integrated heating, cooling, and air quality infrastructure for high-density environments.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdcB4CILoOe8j0qWgbw3kqCTdj-wjIincqH2166KaA-bvCFGYdplL_NAR6TnR8qLFd69VNi--T96Gi1EV5SdsZBnM-wcRX1lcqjk5yGpVywHLkRarVNlzreC53l5iNA136GVWEKhRbxeV96bItAO52EhxL-HFJaZcq19Xc1GufhlKG_SuKVsGSAVJvHUMx0qmSnPY1S4NYp_adWFJJTcUQQUGu74Qs5jpWS2WCntZ8NT8DxsVcBMVJ',
                'icon' => 'hvac',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 2,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdcB4CILoOe8j0qWgbw3kqCTdj-wjIincqH2166KaA-bvCFGYdplL_NAR6TnR8qLFd69VNi--T96Gi1EV5SdsZBnM-wcRX1lcqjk5yGpVywHLkRarVNlzreC53l5iNA136GVWEKhRbxeV96bItAO52EhxL-HFJaZcq19Xc1GufhlKG_SuKVsGSAVJvHUMx0qmSnPY1S4NYp_adWFJJTcUQQUGu74Qs5jpWS2WCntZ8NT8DxsVcBMVJ',
                'detail_title' => 'High-Capacity Air Treatment & HVAC',
                'detail_description' => 'Engineering, supply, and installation of complex commercial and industrial HVAC infrastructures. Designed to maintain cleanroom air quality, temperature, and precise humidity parameters across critical operational areas.',
                'badges' => 'HEPA Filtration, Variable Air Volume (VAV)',
                'technical_specs' => json_encode([
                    ['label' => 'Standard', 'value' => 'SMACNA / ASHRAE Standards', 'icon' => 'verified_user'],
                    ['label' => 'Filtration Grade', 'value' => 'HEPA H14 (99.995%)', 'icon' => 'filter_alt'],
                    ['label' => 'Compressor Type', 'value' => 'Variable Inverter Chillers', 'icon' => 'compress'],
                    ['label' => 'Smart Automation', 'value' => 'BACnet / Modbus Native', 'icon' => 'cable']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Temperature Precision', 'percentage' => 98.5],
                    ['label' => 'Humidity Control Accuracy', 'percentage' => 97.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'dsi',
                'slug' => 'industrial-pipe-work',
                'title' => 'Industrial Pipe Work',
                'short_description' => 'Precision fabrication and installation of chemical, water, and waste fluid networks.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfMFxNMmMWh5eaevLvK-TWWbFy2yT0u2aDm4FRuRqlHBS3CvOgU1CMTFlUyaGXu5mOhvnV2EDMGr810NDcBGY5PUnRsjYadRKw6Kb0VzmgywX1kBATBdewNhqJ9SBGse-b8vgyK4wRW9VSouAwZ2AmOEUJ2J4Di6cRu47cS3Y2S4YSTnCdFal5gAfVP_E0LCPPTslDUyAvARCEqIGVj38pH0RaVbAjyYBu2I2F_DM9a7W1PiyIwAYf',
                'icon' => 'plumbing',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 3,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfMFxNMmMWh5eaevLvK-TWWbFy2yT0u2aDm4FRuRqlHBS3CvOgU1CMTFlUyaGXu5mOhvnV2EDMGr810NDcBGY5PUnRsjYadRKw6Kb0VzmgywX1kBATBdewNhqJ9SBGse-b8vgyK4wRW9VSouAwZ2AmOEUJ2J4Di6cRu47cS3Y2S4YSTnCdFal5gAfVP_E0LCPPTslDUyAvARCEqIGVj38pH0RaVbAjyYBu2I2F_DM9a7W1PiyIwAYf',
                'detail_title' => 'Precision Heavy Industrial Piping',
                'detail_description' => 'Heavy-duty industrial pipe fabrication and high-integrity welding for chemical lines, processing fluids, steam distribution loops, cooling water, and structural utilities. All pipelines undergo complete pressure safety testing.',
                'badges' => 'ASME Section IX Welded, NDT Tested',
                'technical_specs' => json_encode([
                    ['label' => 'Welding Standard', 'value' => 'ASME B31.3 / B31.1 Code', 'icon' => 'verified_user'],
                    ['label' => 'Materials Used', 'value' => 'Carbon Steel, SUS316L, Duplex', 'icon' => 'grid_view'],
                    ['label' => 'Testing Method', 'value' => 'Radiographic / Hydrostatic NDT', 'icon' => 'visibility'],
                    ['label' => 'Pressure Class', 'value' => 'Up to ASME Class 600', 'icon' => 'speed']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Welding Joint Pass Rate', 'percentage' => 99.6],
                    ['label' => 'Leakage-Free Reliability', 'percentage' => 100.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'dsi',
                'slug' => 'boiler-steam-lines',
                'title' => 'Boiler & Steam Lines',
                'short_description' => 'Heavy-duty thermal energy generation and distribution systems for process manufacturing.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVhUSv_IfonsyQ9zh97VvPgYPMKBiG0nSCioydcwOZy81Iwof5tDjbBJnTLPC9XHUspSvWM4Jn1Ma7nA--VRMYD542SpNraCxXlkQM1HApCz3KzaScJ4xqEeKW2vAPuuDvDgYwoGyDIvuZEpLlb53g2dJZc__3D3vlToJKuDdLWOSD8XANgH1xN7wRg8Am31BS-GE57-vIACdOUOX9h5hhWOwlprtyN3o_RtmuwErlRqv0eOC82d_e',
                'icon' => 'factory',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 4,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVhUSv_IfonsyQ9zh97VvPgYPMKBiG0nSCioydcwOZy81Iwof5tDjbBJnTLPC9XHUspSvWM4Jn1Ma7nA--VRMYD542SpNraCxXlkQM1HApCz3KzaScJ4xqEeKW2vAPuuDvDgYwoGyDIvuZEpLlb53g2dJZc__3D3vlToJKuDdLWOSD8XANgH1xN7wRg8Am31BS-GE57-vIACdOUOX9h5hhWOwlprtyN3o_RtmuwErlRqv0eOC82d_e',
                'detail_title' => 'Thermal Energy & Boiler Engineering',
                'detail_description' => 'Installation and engineering of industrial steam generators, thermal oil boilers, and complete high-pressure steam supply distribution networks. Includes water treatment configurations to prevent scale buildup.',
                'badges' => 'High-Pressure Steam, Automated Combustion',
                'technical_specs' => json_encode([
                    ['label' => 'Standard', 'value' => 'ASME Section I Power Boilers', 'icon' => 'verified_user'],
                    ['label' => 'Thermal Capacity', 'value' => 'Up to 30 Tons/Hour Steam', 'icon' => 'mode_heat'],
                    ['label' => 'Control Architecture', 'value' => 'Dual Redundant PLC Control', 'icon' => 'monitor'],
                    ['label' => 'Fuel Types', 'value' => 'Natural Gas, Heavy Fuel, Coal', 'icon' => 'local_gas_station']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Combustion Efficiency', 'percentage' => 86.8],
                    ['label' => 'System Pressure Stability', 'percentage' => 99.2]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'dsi',
                'slug' => 'compressed-air-systems',
                'title' => 'Compressed Air Systems',
                'short_description' => 'Reliable pneumatic power distribution with high-efficiency filtration and compression units.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2JJ-RWncff50novZhwGyNf43ZgC0IWmq-ECQ6X0RC5st1MtcscmDobC5EmKxzr8CmH--P5HSxAVhASO-XF-xbtxK_4C0kk9OCvZb5GgETdhJzWpYjSAFnz_B6uvegjWXh49oOA79Eb5rr6sOQBBX42xWA_MC2fuRhlYMtjftkLnzm-tyfl1lO-KYfauDNdXydJpxiOkgHhTNgPDpxkEA42ESL8YM1IcjlK1sF3GH5C97fZTP-TDX6',
                'icon' => 'airwave',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 5,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2JJ-RWncff50novZhwGyNf43ZgC0IWmq-ECQ6X0RC5st1MtcscmDobC5EmKxzr8CmH--P5HSxAVhASO-XF-xbtxK_4C0kk9OCvZb5GgETdhJzWpYjSAFnz_B6uvegjWXh49oOA79Eb5rr6sOQBBX42xWA_MC2fuRhlYMtjftkLnzm-tyfl1lO-KYfauDNdXydJpxiOkgHhTNgPDpxkEA42ESL8YM1IcjlK1sF3GH5C97fZTP-TDX6',
                'detail_title' => 'Pneumatic Power & Filtration Systems',
                'detail_description' => 'Pneumatic compressor system configurations, including oil-free screw compressors, refrigerated air dryers, line filters, and distribution manifolds. Delivers clean, dry, high-pressure air for plant equipment.',
                'badges' => 'Purity Class 1 Standard, Oil-Free Output',
                'technical_specs' => json_encode([
                    ['label' => 'Air Purity Standard', 'value' => 'ISO 8573-1 Class 1-2-1', 'icon' => 'verified_user'],
                    ['label' => 'Compressor Type', 'value' => 'Rotary Screw Oil-Free', 'icon' => 'compress'],
                    ['label' => 'Dryer Point', 'value' => 'Dew Point -40°C Desiccant', 'icon' => 'dry'],
                    ['label' => 'Piping Material', 'value' => 'Aluminum Ring Main Loop', 'icon' => 'grid_view']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Air Flow Availability', 'percentage' => 100.0],
                    ['label' => 'Energy Cost Reduction', 'percentage' => 18.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // --- 03. MAINTENANCE & LIFECYCLE ---
            [
                'category' => 'maintenance',
                'slug' => 'industrial-pumps-maintenance',
                'title' => 'Industrial Pumps',
                'short_description' => 'Preventative and diagnostic maintenance for centrifugal, slurry, and high-pressure water pump stations.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQSzc4-Omk2O7cqDdYkBht4oXUrKOBLfF9B2NvAz1v5s8fo044ffl_V0MXEan1MIEp8aoVg6cDyiUQ5ha4kgpgUywQSAUEDBmD0hdL8el9l-vuHqdqPm1dmor4JgEPxh4zsr5MX7cDxbv3Sbnzt5_r61Re3mFDGotkC7xPta4FeS_lTV1k72kAKl7T02b_k1s7kZ6LBWguCTlZFZR5OBbQsoRSIo8_eD-mI2LcDiO5OmSBiDLgx-yp',
                'icon' => 'water_pump',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 1,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQSzc4-Omk2O7cqDdYkBht4oXUrKOBLfF9B2NvAz1v5s8fo044ffl_V0MXEan1MIEp8aoVg6cDyiUQ5ha4kgpgUywQSAUEDBmD0hdL8el9l-vuHqdqPm1dmor4JgEPxh4zsr5MX7cDxbv3Sbnzt5_r61Re3mFDGotkC7xPta4FeS_lTV1k72kAKl7T02b_k1s7kZ6LBWguCTlZFZR5OBbQsoRSIo8_eD-mI2LcDiO5OmSBiDLgx-yp',
                'detail_title' => 'High-Capacity Pump Maintenance & Tuning',
                'detail_description' => 'Periodic diagnostic checks, vibration tests, impeller replacements, and mechanical seal overhauls. Restores efficiency to high-pressure centrifugal pumps and slurry transport systems.',
                'badges' => 'Impeller Re-balancing, Vibration Diagnostics',
                'technical_specs' => json_encode([
                    ['label' => 'Balancing Quality', 'value' => 'ISO 1940 G2.5 Standard', 'icon' => 'verified_user'],
                    ['label' => 'Testing Gear', 'value' => 'Piezoelectric Accelerometers', 'icon' => 'settings_suggest'],
                    ['label' => 'Seal Upgrades', 'value' => 'Dual Cartridge Mechanical Seals', 'icon' => 'shield'],
                    ['label' => 'Response Priority', 'value' => '24/7 Priority Emergency Support', 'icon' => 'timer']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Uptime Restored', 'percentage' => 99.8],
                    ['label' => 'Impeller Efficiency Loss Reduction', 'percentage' => 15.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'maintenance',
                'slug' => 'electric-motors-maintenance',
                'title' => 'Electric Motors',
                'short_description' => 'Stator rewinding, rotor balancing, and bearing diagnostics for heavy-duty industrial electric motors.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFdE7jWQm4RmroV4gGjMRhPf6sJHQIiZxsU1ARGbmNOZTnnl9SOxTXBR4CJe44hV5r-tJMdkIihffYB2NJTW4V2Oddj_47COWdLh_p7nhve1n6L2DjLhBZAREMeptInV_j5xc4zw3kC_SFDvqYL4H3Lefnxxsl54ys2jdQz-0xSCumxFHz5_8Ts_o7cWAL7hddtG8R1Wcs-2f-UGnqWn32dIjVWzliiCPDtpGC2RzBuMCb2TrGv91C',
                'icon' => 'electric_bolt',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 2,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFdE7jWQm4RmroV4gGjMRhPf6sJHQIiZxsU1ARGbmNOZTnnl9SOxTXBR4CJe44hV5r-tJMdkIihffYB2NJTW4V2Oddj_47COWdLh_p7nhve1n6L2DjLhBZAREMeptInV_j5xc4zw3kC_SFDvqYL4H3Lefnxxsl54ys2jdQz-0xSCumxFHz5_8Ts_o7cWAL7hddtG8R1Wcs-2f-UGnqWn32dIjVWzliiCPDtpGC2RzBuMCb2TrGv91C',
                'detail_title' => 'Electric Motor Diagnosis & Rewinding',
                'detail_description' => 'Complete overhaul of heavy-duty industrial electric motors. Servicing includes insulation resistance testing (megger), coil rewinding, thermal profiling, precision bearing replacement, and dynamic rotor balancing.',
                'badges' => 'Class H Insulation, dynamic balance',
                'technical_specs' => json_encode([
                    ['label' => 'Standard', 'value' => 'IEEE 43 Testing Compliance', 'icon' => 'verified_user'],
                    ['label' => 'Rewinding Grade', 'value' => 'Class H High Temperature copper', 'icon' => 'electric_bolt'],
                    ['label' => 'Bearing Brand', 'value' => 'SKF Explorer Premium Series', 'icon' => 'check_circle'],
                    ['label' => 'Diagnostic Tool', 'value' => 'Infrared Thermography Scan', 'icon' => 'photo_camera']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Insulation Integrity', 'percentage' => 100.0],
                    ['label' => 'Vibration Reduction', 'percentage' => 92.5]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'maintenance',
                'slug' => 'diesel-engines-maintenance',
                'title' => 'Diesel Engines',
                'short_description' => 'Injector cleaning, valve calibrations, and engine overhauls for diesel backup power units.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Zys3ZkzKMRanYpsw6Oqfq3qOGzasf0b2vM7wqNgtPs5leKuKQcvr4wo3ZG2EPUwrgjGSdbFqfjOn8QCbpwVYz4wJ5rYY_6LPwLQbgiiOt8kxyziyJG2GyR-7NBrTv2XWWce-UCheMDBFq5rcqozdwG5x_-QvhV0ewEqeMkGOOwW_E_kM8eM49_LahvKAQADh2kfsvGYGSArRq50cDqI_jt4llNoOH5fYoVXj4P3-TqASypuHbC6V',
                'icon' => 'engine',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 3,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Zys3ZkzKMRanYpsw6Oqfq3qOGzasf0b2vM7wqNgtPs5leKuKQcvr4wo3ZG2EPUwrgjGSdbFqfjOn8QCbpwVYz4wJ5rYY_6LPwLQbgiiOt8kxyziyJG2GyR-7NBrTv2XWWce-UCheMDBFq5rcqozdwG5x_-QvhV0ewEqeMkGOOwW_E_kM8eM49_LahvKAQADh2kfsvGYGSArRq50cDqI_jt4llNoOH5fYoVXj4P3-TqASypuHbC6V',
                'detail_title' => 'Heavy-Duty Diesel Engine Maintenance',
                'detail_description' => 'Operational maintenance for large diesel engines powering standby generator sets or high-capacity fire pump controllers. Includes fuel injector calibration, valve adjustments, compression testing, and turbocharger inspection.',
                'badges' => 'OEM Standard Calibration, Rapid Start Verification',
                'technical_specs' => json_encode([
                    ['label' => 'Standards', 'value' => 'NFPA 20 / ISO 8528', 'icon' => 'verified_user'],
                    ['label' => 'Fuel System Tool', 'value' => 'Common-Rail Injector Calibrator', 'icon' => 'build'],
                    ['label' => 'Lube Oil Checks', 'value' => 'Spectrometric Wear Analysis', 'icon' => 'science'],
                    ['label' => 'Startup Threshold', 'value' => '<8 seconds Cold Start', 'icon' => 'timer']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Engine Power Output', 'percentage' => 99.4],
                    ['label' => 'Startup Success Probability', 'percentage' => 100.0]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'maintenance',
                'slug' => 'compressors-maintenance',
                'title' => 'Compressors',
                'short_description' => 'Precision compressor calibration, oil analysis, and pneumatic leak checks.',
                'image' => 'https://lh3.googleusercontent.com/aida/AP1WRLs11jPUMVIo5IoD9PrDk6wsOWp67hjZ-XprgD14HayQyaZMlsIzC6RxyOHC25GbVtISKU9BrSHFhnDeJzts2Xf5oyvK996rFwFgcOpBl5n3RUzTBQNH1WNaCjZzufDi5NjTKANkTY2zcSVKWE7gVV3IzsmxEEQaXWi8UdmdwI9Dq7bTY6YlONWMOnhfLFV89hbHhP8CYRcPQNbhGYsr1LpbcsXefX4Nbj0ecnk3DjgkkAFC5U57qol_e9k',
                'icon' => 'compress',
                'tag' => null,
                'is_featured' => false,
                'sort_order' => 4,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida/AP1WRLs11jPUMVIo5IoD9PrDk6wsOWp67hjZ-XprgD14HayQyaZMlsIzC6RxyOHC25GbVtISKU9BrSHFhnDeJzts2Xf5oyvK996rFwFgcOpBl5n3RUzTBQNH1WNaCjZzufDi5NjTKANkTY2zcSVKWE7gVV3IzsmxEEQaXWi8UdmdwI9Dq7bTY6YlONWMOnhfLFV89hbHhP8CYRcPQNbhGYsr1LpbcsXefX4Nbj0ecnk3DjgkkAFC5U57qol_e9k',
                'detail_title' => 'Precision Compressor Maintenance & Leak Detection',
                'detail_description' => 'Operational maintenance of industrial air compressors. This includes oil-lubrication analyses, separator filter swaps, pressure relief valve calibrations, and ultrasonic detection of compressed air line leaks.',
                'badges' => 'Ultrasonic Leak Checked, PRV Certified',
                'technical_specs' => json_encode([
                    ['label' => 'Safety Standard', 'value' => 'ASME Boiler Code Sec VIII', 'icon' => 'verified_user'],
                    ['label' => 'Leak Detection', 'value' => 'Ultrasonic Frequency Scanning', 'icon' => 'settings_suggest'],
                    ['label' => 'Air Purity Compliance', 'value' => 'ISO 8573-1 Class 1 Checking', 'icon' => 'eco'],
                    ['label' => 'Maintenance Schedule', 'value' => 'Every 2000 Operating Hours', 'icon' => 'calendar_today']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Leak Reduction Rate', 'percentage' => 95.0],
                    ['label' => 'Compression Ratio Stability', 'percentage' => 98.8]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'category' => 'maintenance',
                'slug' => 'generator-support-diagnostics',
                'title' => 'Generator Support & Diagnostics',
                'short_description' => 'Load bank testing, alternator insulation diagnostics, and automatic transfer switch (ATS) testing.',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5cg5UzJan1TtUk8HxgXN1i70x7rvtF_UPF_d1iKoJZUyzfN4YMdPdqmbR758Z1rZOAI2LyY64zioYpHYdTU2bLGW4H5nU7bJh6-zJhpd596o0bSficb0qmBd2BiNmxwLz3EFkc4C2OC_47Q5XMgqUV2s3o_Cz0fZxkoy655uPmulOqfPxNU0ynRT6LZrGRUncWV_sk8CK3nLMFod7WqLVCyUg0SvZSfIRVPztlDTb_Wy9erTyubCY',
                'icon' => 'bolt',
                'tag' => 'Mission Critical',
                'is_featured' => true,
                'sort_order' => 5,
                'is_active' => true,
                'hero_image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5cg5UzJan1TtUk8HxgXN1i70x7rvtF_UPF_d1iKoJZUyzfN4YMdPdqmbR758Z1rZOAI2LyY64zioYpHYdTU2bLGW4H5nU7bJh6-zJhpd596o0bSficb0qmBd2BiNmxwLz3EFkc4C2OC_47Q5XMgqUV2s3o_Cz0fZxkoy655uPmulOqfPxNU0ynRT6LZrGRUncWV_sk8CK3nLMFod7WqLVCyUg0SvZSfIRVPztlDTb_Wy9erTyubCY',
                'detail_title' => 'Alternator & Generator Load Testing',
                'detail_description' => 'Full electrical diagnostics on critical backup alternators, including stator/rotor winding evaluations (PI and polarization tests), automatic transfer switch (ATS) timing verification, and full-capacity resistive load bank testing.',
                'badges' => 'ATS Load Tested, Winding Inspected',
                'technical_specs' => json_encode([
                    ['label' => 'Standard', 'value' => 'NFPA 110 Compliance', 'icon' => 'verified_user'],
                    ['label' => 'Load Capability', 'value' => 'Up to 2.5MW Resistive Testing', 'icon' => 'electric_bolt'],
                    ['label' => 'ATS Delay Rating', 'value' => '<100ms Switchover Threshold', 'icon' => 'timer'],
                    ['label' => 'Stator Testing', 'value' => 'Polarization Index (PI) Inspected', 'icon' => 'analytics']
                ]),
                'metrics' => json_encode([
                    ['label' => 'Generator Load Capacity', 'percentage' => 100.0],
                    ['label' => 'ATS Switch Success Rate', 'percentage' => 99.9]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
        Schema::dropIfExists('service_settings');
    }
};
