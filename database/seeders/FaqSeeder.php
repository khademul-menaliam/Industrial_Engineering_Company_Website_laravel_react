<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Faq;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'What industries do you specialize in?',
                'answer' => 'Titan Precision v2 specializes in heavy industries, structural infrastructure, fire safety engineering (MEP), and industrial automation. We engineer systems that require extreme precision and strict safety compliance.',
                'order' => 1,
            ],
            [
                'question' => 'Are your designs compliant with international standards?',
                'answer' => 'Yes, all our engineering systems are built to meet and exceed global regulatory standards, including ISO 9001:2015, NFPA codes for fire safety, and regional seismic and environmental requirements.',
                'order' => 2,
            ],
            [
                'question' => 'How do you ensure quality control during development?',
                'answer' => 'We use predictive digital twin modeling, advanced CAD technologies, and rigorous physical stress tests. Our quality protocols ensure zero-tolerance for component failure.',
                'order' => 3,
            ],
            [
                'question' => 'Can we integrate your automated robotics systems with existing workflows?',
                'answer' => 'Absolutely. Our specialized automation team designs custom PLC/SCADA interfaces to integrate state-of-the-art industrial robotics directly into your legacy pipelines.',
                'order' => 4,
            ],
            [
                'question' => 'How do I request a project audit or tender?',
                'answer' => 'You can reach out through our Secure Portal on the Contact page, or initiate a direct Project Tender inquiry. Our engineering directors will evaluate your requirements and provide compliance specs.',
                'order' => 5,
            ]
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
