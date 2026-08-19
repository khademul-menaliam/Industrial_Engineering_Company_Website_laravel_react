<?php
/**
 * Temporary Cache Clear Script
 * 
 * Upload this file to your server's "public/" directory (e.g. public/clear.php)
 * Visit: https://yourdomain.com/clear.php
 * After execution, DELETE this file immediately for security reasons.
 */

define('LARAVEL_START', microtime(true));

// Check if maintenance file exists
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Laravel Auto Loader
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel
$app = require_once __DIR__.'/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Artisan;

echo "<h2>Laravel Cache Cleaner</h2>";

try {
    echo "Running <code>optimize:clear</code>...<br>";
    $exitCode = Artisan::call('optimize:clear');
    echo "<pre>" . Artisan::output() . "</pre>";
    echo "<strong>Cache cleared successfully!</strong><br><br>";
    echo "<span style='color:red;'><strong>IMPORTANT:</strong> Delete this file (public/clear.php) from your server immediately!</span>";
} catch (\Throwable $e) {
    echo "<span style='color:red;'>Error clearing cache: " . $e->getMessage() . "</span>";
}
