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
            } catch (\Exception $e) {
                Log::error("Error running shell command 'npm run build': " . $e->getMessage(), [
                    'exception' => $e
                ]);

                return response()->json([
                    'success' => false,
                    'exit_code' => 500,
                    'output' => $e->getMessage() . "\n" . $e->getTraceAsString(),
                    'message' => "Failed to execute 'npm run build'."
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
        } catch (\Exception $e) {
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
