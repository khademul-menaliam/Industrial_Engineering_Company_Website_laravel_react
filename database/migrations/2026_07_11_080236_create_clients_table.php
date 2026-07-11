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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('logo', 500);
            $table->text('desc');
            $table->string('type');
            $table->string('icon');
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Insert initial static data
        \DB::table('clients')->insert([
            [
                'name' => 'AEROSPACE DYNAMICS',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHhM5CQyNf-2wpSWD8R0GRIJWthECM38zcvUA4eDyEC3dkutMx7IUbxoGAFXvGWXRWLbuyHMm3KZn_AVmQtJ3CgvNCua0OPC9F9PEANdvLUQbWDY-ycan0q1J_BZPL_bdhmOwncJ6muFjKVDSEYZx9_Wzsfp1z_9Pi9PiL8IUYnpI4MaE05Fv14_uG0TEhNWb09OBXedhek01qEdYmIQtWsL4fH7bP6bkyn851veCw9p-kO6Sb13aExw',
                'desc' => 'Propulsion system structural validation and ISO compliance.',
                'type' => 'VIEW PROJECTS',
                'icon' => 'open_in_new',
                'order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'GLO-ENERGY CORP',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2t7mHdDsUpx9X8QfasEhqOmYyi89miODolxNLpG-fqSHU4SO7HSLdoOu9miBdtvt2_5qCywDtW0xvB5EfkRyGX6gYjVSJ4EupcKOrlrkmLU-8zANSlbtYy5eB4pAlnGtETh-dYz7jRSSSNpIINvNudAGf84iZhxWNhe2P_GgtwEZ2LZRxTzoTz74k6zESWh46juEXGGQjmQI1d_FgtWv7ivxQRBhQvx7n-PEQnZPH4Sc9-X-rwB4U5w',
                'desc' => 'Grid-scale storage facility design and site assessment.',
                'type' => 'CASE STUDY',
                'icon' => 'description',
                'order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'QUANTUM SYSTEMS',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl_vI4k33CjhKur-zT_xiyt6ZBXK96nqRwVG9383xgCWaoz4vJ9U8nCAKXL2iDrv5zr8QNqjljZ8n00JtthTi71ucjtANJ8gh6c_-jgCDY_GWQGYgFIPuyuoFqL6-60kg-nmphwH41Pl6ZUH9eWAnBuHYDsljjI7uJE4COwmv5rNZ4JjRkesS2pIOGfNW6Q8qtwQpcnetPRHL2H4fieKz5GYVhIAvR6jvqP7nuWqYAffmRtThqpKyWKQ',
                'desc' => 'Clean-room infrastructure for semiconductor fabrication.',
                'type' => 'VIEW PROJECTS',
                'icon' => 'open_in_new',
                'order' => 3,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'OCEANIC LOGISTICS',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8jOlw_bpKvZEP3b_URBhFla7hGkihRmohwfdnGS5MHYf0DfFrAHvQqVpptkqZXdUKEBWfeEsgRg3M60bQgKW99Gs0toCtyI0swh8Hk9UxqdVNf5ULpVsqsQ9v-GpgwQlrJPZHmHN2-35SGYaL9uLDXPDS-aql9kdu1cPb7YIqn2Bxn0-Cr7aV1--JVpDbVc9JsVIhRQ9UIRqA2l5SQVO79V0E2bAmJODVJV-GpQ1E6sqMHTN6K9pLIw',
                'desc' => 'Deep-water terminal stress analysis and reinforcement.',
                'type' => 'CASE STUDY',
                'icon' => 'description',
                'order' => 4,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'AUTO-BOTICS INC',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3qKpYsyUZ5Nb802lmmNk8UjHn-O6aCO5_mxIyAvaL8Fw8YtNTr-jJ8R3aLUqJyPMAK6ywJDY6EK3M-m5dMBFSaA6AUhuXwCFWrWAZ0PRtYtDSrMP-DGTgxo8QOzcsFNIOmeDpERpYhgzaUyufwlNxi4Eeo7s3aFrRZGgg4XixjxEATSgHHbw8U0G17h42ne-YKsUZjkqxNS4T8wE3emYwGD0E2zVi4REVdcFm5KAF2_hr34VtJvIZyA',
                'desc' => 'Automated assembly line precision calibration.',
                'type' => 'VIEW PROJECTS',
                'icon' => 'open_in_new',
                'order' => 5,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'CIVIL-CORE INT',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4wEJk53uFhVFtqPlZ8W1N0Cf372TlJQqp5Iqzo30pqjoxc3hMjp2vk-9a0BXXY4dhZ7J8CfHVt1CPOh6r5jasYRHpKk_qIdlbfzTinUiFBrABz5sEHFAGEoeE27dlF9EVFio1qNTrVM2nL0t-jWHkNX6LjN7bLTSFFSOiDH4ZplZjvqOCqlRqIzs1IWZPbATLmgvFYHA3txRa74adEbGLdyv1nUDZOGs1K8ShW6bi3c3Fm62DePzUMA',
                'desc' => 'Smart-city infrastructure and structural health monitoring.',
                'type' => 'CASE STUDY',
                'icon' => 'description',
                'order' => 6,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
