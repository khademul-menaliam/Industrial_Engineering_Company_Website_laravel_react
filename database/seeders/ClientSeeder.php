<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = now();

        // Valuable Clients from PDF Pages 19-20
        $clients = [
            [
                'name' => 'Stylemeth San Apparels',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHhM5CQyNf-2wpSWD8R0GRIJWthECM38zcvUA4eDyEC3dkutMx7IUbxoGAFXvGWXRWLbuyHMm3KZn_AVmQtJ3CgvNCua0OPC9F9PEANdvLUQbWDY-ycan0q1J_BZPL_bdhmOwncJ6muFjKVDSEYZx9_Wzsfp1z_9Pi9PiL8IUYnpI4MaE05Fv14_uG0TEhNWb09OBXedhek01qEdYmIQtWsL4fH7bP6bkyn851veCw9p-kO6Sb13aExw',
                'desc' => 'AR Engineering is providing Passive Fire Protection System solutions, ensuring fire-resistive construction systems and compliance with safety standards.',
                'type' => 'PASSIVE FIRE CONSULTANT',
                'icon' => 'local_fire_department',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Graphics Textiles Ltd.',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2t7mHdDsUpx9X8QfasEhqOmYyi89miODolxNLpG-fqSHU4SO7HSLdoOu9miBdtvt2_5qCywDtW0xvB5EfkRyGX6gYjVSJ4EupcKOrlrkmLU-8zANSlbtYy5eB4pAlnGtETh-dYz7jRSSSNpIINvNudAGf84iZhxWNhe2P_GgtwEZ2LZRxTzoTz74k6zESWh46juEXGGQjmQI1d_FgtWv7ivxQRBhQvx7n-PEQnZPH4Sc9-X-rwB4U5w',
                'desc' => 'Providing comprehensive Mechanical, Electrical, Plumbing (MEP), and Fire & Life Safety consultancy services.',
                'type' => 'MEP CONSULTANT',
                'icon' => 'engineering',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Probidhi Apparels Ltd.',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl_vI4k33CjhKur-zT_xiyt6ZBXK96nqRwVG9383xgCWaoz4vJ9U8nCAKXL2iDrv5zr8QNqjljZ8n00JtthTi71ucjtANJ8gh6c_-jgCDY_GWQGYgFIPuyuoFqL6-60kg-nmphwH41Pl6ZUH9eWAnBuHYDsljjI7uJE4COwmv5rNZ4JjRkesS2pIOGfNW6Q8qtwQpcnetPRHL2H4fieKz5GYVhIAvR6jvqP7nuWqYAffmRtThqpKyWKQ',
                'desc' => 'EPC Contractor delivering comprehensive design, procurement, installation, and commissioning for Fire & Life Safety Systems.',
                'type' => 'EPC CONTRACTOR',
                'icon' => 'verified',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'L Usine Fashion',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8jOlw_bpKvZEP3b_URBhFla7hGkihRmohwfdnGS5MHYf0DfFrAHvQqVpptkqZXdUKEBWfeEsgRg3M60bQgKW99Gs0toCtyI0swh8Hk9UxqdVNf5ULpVsqsQ9v-GpgwQlrJPZHmHN2-35SGYaL9uLDXPDS-aql9kdu1cPb7YIqn2Bxn0-Cr7aV1--JVpDbVc9JsVIhRQ9UIRqA2l5SQVO79V0E2bAmJODVJV-GpQ1E6sqMHTN6K9pLIw',
                'desc' => 'End-to-end engineering, procurement, construction, testing, and commissioning services for Fire & Life Safety Systems.',
                'type' => 'EPC CONTRACTOR',
                'icon' => 'verified',
                'order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Purbani Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3qKpYsyUZ5Nb802lmmNk8UjHn-O6aCO5_mxIyAvaL8Fw8YtNTr-jJ8R3aLUqJyPMAK6ywJDY6EK3M-m5dMBFSaA6AUhuXwCFWrWAZ0PRtYtDSrMP-DGTgxo8QOzcsFNIOmeDpERpYhgzaUyufwlNxi4Eeo7s3aFrRZGgg4XixjxEATSgHHbw8U0G17h42ne-YKsUZjkqxNS4T8wE3emYwGD0E2zVi4REVdcFm5KAF2_hr34VtJvIZyA',
                'desc' => 'Comprehensive Mechanical, Electrical, Plumbing (MEP), and Fire & Life Safety consultancy services for industrial developments.',
                'type' => 'MEP CONSULTANT',
                'icon' => 'architecture',
                'order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Rahman Sports Wear',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4wEJk53uFhVFtqPlZ8W1N0Cf372TlJQqp5Iqzo30pqjoxc3hMjp2vk-9a0BXXY4dhZ7J8CfHVt1CPOh6r5jasYRHpKk_qIdlbfzTinUiFBrABz5sEHFAGEoeE27dlF9EVFio1qNTrVM2nL0t-jWHkNX6LjN7bLTSFFSOiDH4ZplZjvqOCqlRqIzs1IWZPbATLmgvFYHA3txRa74adEbGLdyv1nUDZOGs1K8ShW6bi3c3Fm62DePzUMA',
                'desc' => 'Fire & Life Safety Consultant providing comprehensive fire protection, fire detection, and life safety solutions.',
                'type' => 'FIRE & LIFE SAFETY CONSULTANT',
                'icon' => 'local_fire_department',
                'order' => 6,
                'is_active' => true,
            ],
            [
                'name' => 'AKH Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHhM5CQyNf-2wpSWD8R0GRIJWthECM38zcvUA4eDyEC3dkutMx7IUbxoGAFXvGWXRWLbuyHMm3KZn_AVmQtJ3CgvNCua0OPC9F9PEANdvLUQbWDY-ycan0q1J_BZPL_bdhmOwncJ6muFjKVDSEYZx9_Wzsfp1z_9Pi9PiL8IUYnpI4MaE05Fv14_uG0TEhNWb09OBXedhek01qEdYmIQtWsL4fH7bP6bkyn851veCw9p-kO6Sb13aExw',
                'desc' => 'Professional consultancy services in Mechanical, Electrical, Plumbing (MEP), and Fire & Life Safety engineering.',
                'type' => 'MEP CONSULTANT',
                'icon' => 'engineering',
                'order' => 7,
                'is_active' => true,
            ],
            [
                'name' => 'Urmi Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2t7mHdDsUpx9X8QfasEhqOmYyi89miODolxNLpG-fqSHU4SO7HSLdoOu9miBdtvt2_5qCywDtW0xvB5EfkRyGX6gYjVSJ4EupcKOrlrkmLU-8zANSlbtYy5eB4pAlnGtETh-dYz7jRSSSNpIINvNudAGf84iZhxWNhe2P_GgtwEZ2LZRxTzoTz74k6zESWh46juEXGGQjmQI1d_FgtWv7ivxQRBhQvx7n-PEQnZPH4Sc9-X-rwB4U5w',
                'desc' => 'Annual Maintenance Contract (AMC) services for the Fire Pump System, ensuring code-compliant performance.',
                'type' => 'AMC FOR FIRE PUMP SYSTEM',
                'icon' => 'build',
                'order' => 8,
                'is_active' => true,
            ],
            [
                'name' => 'Standard Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl_vI4k33CjhKur-zT_xiyt6ZBXK96nqRwVG9383xgCWaoz4vJ9U8nCAKXL2iDrv5zr8QNqjljZ8n00JtthTi71ucjtANJ8gh6c_-jgCDY_GWQGYgFIPuyuoFqL6-60kg-nmphwH41Pl6ZUH9eWAnBuHYDsljjI7uJE4COwmv5rNZ4JjRkesS2pIOGfNW6Q8qtwQpcnetPRHL2H4fieKz5GYVhIAvR6jvqP7nuWqYAffmRtThqpKyWKQ',
                'desc' => 'Providing Annual Maintenance Contract (AMC) services for the Fire Pump System, including regular testing and inspection.',
                'type' => 'AMC FOR FIRE PUMP SYSTEM',
                'icon' => 'build',
                'order' => 9,
                'is_active' => true,
            ],
            [
                'name' => 'IRIS Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8jOlw_bpKvZEP3b_URBhFla7hGkihRmohwfdnGS5MHYf0DfFrAHvQqVpptkqZXdUKEBWfeEsgRg3M60bQgKW99Gs0toCtyI0swh8Hk9UxqdVNf5ULpVsqsQ9v-GpgwQlrJPZHmHN2-35SGYaL9uLDXPDS-aql9kdu1cPb7YIqn2Bxn0-Cr7aV1--JVpDbVc9JsVIhRQ9UIRqA2l5SQVO79V0E2bAmJODVJV-GpQ1E6sqMHTN6K9pLIw',
                'desc' => 'Passive Fire Protection Consultant delivering specialized solutions in accordance with applicable life safety codes.',
                'type' => 'PASSIVE FIRE CONSULTANT',
                'icon' => 'local_fire_department',
                'order' => 10,
                'is_active' => true,
            ],
            [
                'name' => 'BITOPI Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3qKpYsyUZ5Nb802lmmNk8UjHn-O6aCO5_mxIyAvaL8Fw8YtNTr-jJ8R3aLUqJyPMAK6ywJDY6EK3M-m5dMBFSaA6AUhuXwCFWrWAZ0PRtYtDSrMP-DGTgxo8QOzcsFNIOmeDpERpYhgzaUyufwlNxi4Eeo7s3aFrRZGgg4XixjxEATSgHHbw8U0G17h42ne-YKsUZjkqxNS4T8wE3emYwGD0E2zVi4REVdcFm5KAF2_hr34VtJvIZyA',
                'desc' => 'Expert consultancy services in fire protection, detection, and life safety engineering for safe industrial facilities.',
                'type' => 'FIRE & LIFE SAFETY CONSULTANT',
                'icon' => 'local_fire_department',
                'order' => 11,
                'is_active' => true,
            ],
            [
                'name' => 'Dekko Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4wEJk53uFhVFtqPlZ8W1N0Cf372TlJQqp5Iqzo30pqjoxc3hMjp2vk-9a0BXXY4dhZ7J8CfHVt1CPOh6r5jasYRHpKk_qIdlbfzTinUiFBrABz5sEHFAGEoeE27dlF9EVFio1qNTrVM2nL0t-jWHkNX6LjN7bLTSFFSOiDH4ZplZjvqOCqlRqIzs1IWZPbATLmgvFYHA3txRa74adEbGLdyv1nUDZOGs1K8ShW6bi3c3Fm62DePzUMA',
                'desc' => 'Comprehensive fire protection, detection, and life safety engineering consultancy services.',
                'type' => 'FIRE & LIFE SAFETY CONSULTANT',
                'icon' => 'local_fire_department',
                'order' => 12,
                'is_active' => true,
            ],
            [
                'name' => 'Envoy Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHhM5CQyNf-2wpSWD8R0GRIJWthECM38zcvUA4eDyEC3dkutMx7IUbxoGAFXvGWXRWLbuyHMm3KZn_AVmQtJ3CgvNCua0OPC9F9PEANdvLUQbWDY-ycan0q1J_BZPL_bdhmOwncJ6muFjKVDSEYZx9_Wzsfp1z_9Pi9PiL8IUYnpI4MaE05Fv14_uG0TEhNWb09OBXedhek01qEdYmIQtWsL4fH7bP6bkyn851veCw9p-kO6Sb13aExw',
                'desc' => 'EPC Contractor delivering comprehensive engineering, procurement, construction, and commissioning for fire safety.',
                'type' => 'EPC CONTRACTOR',
                'icon' => 'verified',
                'order' => 13,
                'is_active' => true,
            ],
            [
                'name' => 'Palmal Group',
                'logo' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2t7mHdDsUpx9X8QfasEhqOmYyi89miODolxNLpG-fqSHU4SO7HSLdoOu9miBdtvt2_5qCywDtW0xvB5EfkRyGX6gYjVSJ4EupcKOrlrkmLU-8zANSlbtYy5eB4pAlnGtETh-dYz7jRSSSNpIINvNudAGf84iZhxWNhe2P_GgtwEZ2LZRxTzoTz74k6zESWh46juEXGGQjmQI1d_FgtWv7ivxQRBhQvx7n-PEQnZPH4Sc9-X-rwB4U5w',
                'desc' => 'Annual Maintenance Contract (AMC) services for Fire Protection System, ensuring operational readiness.',
                'type' => 'AMC FOR FIRE PROTECTION SYSTEM',
                'icon' => 'build',
                'order' => 14,
                'is_active' => true,
            ],
        ];

        foreach ($clients as $c) {
            DB::table('clients')->updateOrInsert(
                ['name' => $c['name']],
                array_merge($c, [
                    'created_at' => $now,
                    'updated_at' => $now,
                ])
            );
        }

        $clientNames = array_column($clients, 'name');
        DB::table('clients')->whereNotIn('name', $clientNames)->delete();
    }
}
