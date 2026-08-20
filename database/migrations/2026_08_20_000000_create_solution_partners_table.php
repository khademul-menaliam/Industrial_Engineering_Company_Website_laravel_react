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
        Schema::create('solution_partners', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('logo', 500);
            $table->string('type');
            $table->text('desc');
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Seed initial data from profile PDF
        \DB::table('solution_partners')->insert([
            [
                'name' => 'Emirates Fire Fighting Equipment Factory L.L.C (FIREX)',
                'logo' => 'https://placehold.co/200x100?text=FIREX',
                'type' => 'Fire Protection System Partner',
                'desc' => 'Emirates Fire Fighting Equipment Factory L.L.C (FIREX) serves as a trusted service partner for comprehensive fire protection system solutions. In collaboration with AR Engineering, FIREX supports the supply, installation, testing, commissioning, and maintenance of high-quality fire safety equipment and systems.',
                'order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Waterfall Pumps Manufacturing',
                'logo' => 'https://placehold.co/200x100?text=Waterfall',
                'type' => 'Fire Pump System Partner',
                'desc' => 'Waterfall Pumps Manufacturing is a strategic solution partner of AR Engineering for fire pump systems, providing reliable and high-performance fire protection pump solutions. The company specializes in the design and manufacturing of NFPA-compliant fire pumps and packaged pump systems, supporting a wide range of industrial, commercial, and infrastructure projects.',
                'order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'NITTAN',
                'logo' => 'https://placehold.co/200x100?text=NITTAN',
                'type' => 'Fire Detection System Partner',
                'desc' => 'AR Engineering works as a Service Solution Partner for NITTAN fire alarm systems to ensure proper installation, commissioning, and maintenance of fire detection networks in compliance with project and regulatory requirements.',
                'order' => 3,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'NAFFCO',
                'logo' => 'https://placehold.co/200x100?text=NAFFCO',
                'type' => 'Passive Fire Protection System Partner',
                'desc' => 'AR Engineering works in collaboration with NAFFCO as a Service Solution Partner for the execution, installation, and maintenance of passive fire protection systems across various project types.',
                'order' => 4,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Morgan Marine Blanket',
                'logo' => 'https://placehold.co/200x100?text=Morgan',
                'type' => 'Passive Fire Protection System Partner',
                'desc' => 'AR Engineering integrates Morgan Marine Blanket solutions as part of its passive fire protection service system for marine and industrial projects, ensuring reliable thermal and fire resistance performance.',
                'order' => 5,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Lackeby',
                'logo' => 'https://placehold.co/200x100?text=Lackeby',
                'type' => 'Building Heating & Cooling System Partner',
                'desc' => 'AR Engineering proudly serves as the Service Partner for Building Heating and Cooling Systems of Lackeby, providing professional operation, maintenance, troubleshooting, and technical support services to ensure efficient and reliable system performance.',
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
        Schema::dropIfExists('solution_partners');
    }
};
