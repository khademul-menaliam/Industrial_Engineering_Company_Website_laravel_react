<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class CommandController extends Controller
{
    /**
     * Map of user-friendly keys to official Artisan command signatures.
     */
    protected $allowedCommands = [
        'optimize_clear' => [
            'command' => 'optimize:clear',
            'params' => [],
            'title' => 'Optimize Clear'
        ],
        'optimize_cache' => [
            'command' => 'optimize',
            'params' => [],
            'title' => 'Optimize'
        ],
        'config_clear' => [
            'command' => 'config:clear',
            'params' => [],
            'title' => 'Config Clear'
        ],
        'config_cache' => [
            'command' => 'config:cache',
            'params' => [],
            'title' => 'Config Cache'
        ],
        'route_clear' => [
            'command' => 'route:clear',
            'params' => [],
            'title' => 'Route Clear'
        ],
        'route_cache' => [
            'command' => 'route:cache',
            'params' => [],
            'title' => 'Route Cache'
        ],
        'view_clear' => [
            'command' => 'view:clear',
            'params' => [],
            'title' => 'View Clear'
        ],
        'cache_clear' => [
            'command' => 'cache:clear',
            'params' => [],
            'title' => 'Cache Clear'
        ],
        'migrate' => [
            'command' => 'migrate',
            'params' => ['--force' => true],
            'title' => 'Database Migration'
        ],
        'migrate_fresh_seed' => [
            'command' => 'migrate:fresh',
            'params' => ['--seed' => true, '--force' => true],
            'title' => 'Database Fresh & Seed'
        ],
        'storage_link' => [
            'command' => 'storage:link',
            'params' => [],
            'title' => 'Storage Symlink'
        ],
        'npm_run_build' => [
            'command' => 'npm_run_build',
            'params' => [],
            'title' => 'Build Assets (Vite)'
        ],
    ];

    /**
     * Execute the requested command securely.
     */
    public function runCommand(Request $request): JsonResponse
    {
        $request->validate([
            'command' => 'required|string',
        ]);

        $key = $request->input('command');

        if (!array_key_exists($key, $this->allowedCommands)) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized or unknown command execution request.'
            ], 403);
        }

        $commandConfig = $this->allowedCommands[$key];
        $command = $commandConfig['command'];
        $params = $commandConfig['params'];

        if ($key === 'npm_run_build') {
            try {
                Log::info("Admin user initiated execution of shell command: npm run build");
                
                @set_time_limit(300);
                @ini_set('memory_limit', '1024M');

                $result = \Illuminate\Support\Facades\Process::path(base_path())
                    ->timeout(300)
                    ->run('npm run build');

                $output = $result->output();
                $errorOutput = $result->errorOutput();
                $combinedOutput = $output . ($errorOutput ? "\nERRORS/WARNINGS:\n" . $errorOutput : '');

                return response()->json([
                    'success' => $result->successful(),
                    'exit_code' => $result->exitCode(),
                    'output' => $combinedOutput ?: 'Command executed successfully with no output.',
                    'message' => "Shell command 'npm run build' executed successfully."
                ]);
            } catch (\Throwable $e) {
                Log::error("Error running shell command 'npm run build': " . $e->getMessage(), [
                    'exception' => $e
                ]);

                $userFriendlyMsg = $e->getMessage();
                if (str_contains(strtolower($e->getMessage()), 'proc_open') || !function_exists('proc_open')) {
                    $userFriendlyMsg = "ERROR: PHP process execution ('proc_open') is disabled on this server's hosting environment.\n\n" .
                                       "You cannot run Node/Vite build commands directly on this shared hosting provider (ezyro.com).\n" .
                                       "FIX: Run 'npm run build' locally on your computer, and then upload the compiled 'public/build' folder to your server using FTP or the hosting File Manager.";
                }

                return response()->json([
                    'success' => false,
                    'exit_code' => 500,
                    'output' => $userFriendlyMsg,
                    'message' => "Failed to execute 'npm run build'."
                ], 500);
            }
        }

        if ($key === 'storage_link') {
            try {
                Log::info("Admin user initiated execution of Artisan command: php artisan storage:link");
                $exitCode = Artisan::call($command, $params);
                $output = Artisan::output();

                return response()->json([
                    'success' => $exitCode === 0,
                    'exit_code' => $exitCode,
                    'output' => $output ?: 'Command executed successfully with no output.',
                    'message' => "Artisan command '{$command}' executed successfully."
                ]);
            } catch (\Throwable $e) {
                Log::warning("Standard storage:link failed, attempting symlink fallback: " . $e->getMessage());
                
                $target = storage_path('app/public');
                $link = public_path('storage');

                if (file_exists($link)) {
                    return response()->json([
                        'success' => true,
                        'exit_code' => 0,
                        'output' => "The \"public/storage\" directory already exists.",
                        'message' => "Storage link already exists."
                    ]);
                }

                if (function_exists('symlink') && @symlink($target, $link)) {
                    return response()->json([
                        'success' => true,
                        'exit_code' => 0,
                        'output' => "Created symlink using PHP symlink() fallback successfully.",
                        'message' => "Storage symlink created using fallback."
                    ]);
                }

                $errorDetail = $e->getMessage();
                if (str_contains(strtolower($errorDetail), 'exec')) {
                    $errorDetail = "ERROR: PHP function 'exec()' is disabled by your hosting provider (ezyro.com).\n" .
                                   "Laravel's default storage:link command requires exec() to generate symlinks.\n\n" .
                                   "PHP symlink() fallback failed. Your host has disabled symlink creation.\n" .
                                   "FIX: Create the storage symlink manually using a custom PHP file or your hosting File Manager link tool.";
                }

                return response()->json([
                    'success' => false,
                    'exit_code' => 500,
                    'output' => $errorDetail,
                    'message' => "Failed to execute storage:link."
                ], 500);
            }
        }

        try {
            Log::info("Admin user initiated execution of Artisan command: php artisan {$command}");
            
            // Execute the Artisan command
            $exitCode = Artisan::call($command, $params);
            $output = Artisan::output();

            return response()->json([
                'success' => $exitCode === 0,
                'exit_code' => $exitCode,
                'output' => $output ?: 'Command executed successfully with no output.',
                'message' => "Artisan command '{$command}' executed successfully."
            ]);
        } catch (\Throwable $e) {
            Log::error("Error running Artisan command '{$command}': " . $e->getMessage(), [
                'exception' => $e
            ]);

            return response()->json([
                'success' => false,
                'exit_code' => 500,
                'output' => $e->getMessage() . "\n" . $e->getTraceAsString(),
                'message' => "Failed to execute '{$command}'."
            ], 500);
        }
    }
}
