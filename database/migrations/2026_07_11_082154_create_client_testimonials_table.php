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
        Schema::create('client_testimonials', function (Blueprint $table) {
            $table->id();
            $table->text('quote');
            $table->string('author');
            $table->string('role');
            $table->string('avatar', 500);
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        \DB::table('client_testimonials')->insert([
            [
                'quote' => "Titan Precision's attention to structural detail and their proactive compliance reporting saved our project timeline from several potential delays. Their technical mastery is unparalleled in the aerospace sector.",
                'author' => 'DR. MARCUS THORNE',
                'role' => 'CTO, AEROSPACE DYNAMICS',
                'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvjExXib_Nxk-SvgOlweLYNIMXiAUc_FhG9ARGCjwOoMpmTH45fWTtfstZ0w-S386_yFdltF0PME8X7QzYU9jtelFScX11aWF8Hq0BOCmAPWwxEf0PfXtGs5pT-d0AKbwZnTqvOzs8tSVKCftsNPHySXs23E4pPWTgLkpomC0SjxoYLospwj9i2vRpu6o0p0kdpPtkxqYp2paREyWOiJblEgOIQ9zGuiJqQlN3gXI9sapZ5u3L5eGM4g',
                'order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'quote' => "The precision of their CAD models and the seamless integration into our existing BIM workflow was impressive. They operate with a level of reliability that is rare in complex infrastructure projects today.",
                'author' => 'ELENA RODRIGUEZ',
                'role' => 'DIR. INFRASTRUCTURE, GLO-ENERGY',
                'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFV6u3u9-YFG6P5Q0oG1szItDw1R25dLti2RdrC0iN81qzGI7aW91oEucoLH98zYptBu7q3eRazG-ZY3z8yJyWGVS2mNYJq03-TiJZpQky3d7f4pHeLtbpCe0rrGXhqeVnmVJu1MoEo9FFBqCvS5-g2KfFhCCqPqonLkebozFYmQGV98xpWyDHr3px1qjF2UNQUK83WmDdAYV09RCn0w4eTeoR3nN6DHOwoYpshy26EYahvMt-UJBnWg',
                'order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'quote' => "From initial site assessment to final ISO certification assistance, Titan Precision provided a turn-key experience that allowed us to focus on our core operational growth.",
                'author' => 'JONATHAN STERLING',
                'role' => 'OPERATIONS LEAD, STERLING SYSTEMS',
                'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY-Oc4a7WC8vgYg0rPQkrPo-jdzEzPCjzCoZYKQE55jYdBoawjDIAPIqx8tv1Jv_m3sj0w5EM_VYdxQnFxSbqN9qmi3ccL0cQPDYv3HLmikSAJZFKrdMeusTKAVZye5Wtz5qjX0N294fsU-kGZHQD0Yl1GPcD80nsQ439o5nd8fnmPcpZRcoxIYFZNxYRJrE6S1UbtgvSNQX7tM8D5lTiLnrfl44-w1DttpqBcU37v3dpXIfKlc_aP0w',
                'order' => 3,
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
        Schema::dropIfExists('client_testimonials');
    }
};
