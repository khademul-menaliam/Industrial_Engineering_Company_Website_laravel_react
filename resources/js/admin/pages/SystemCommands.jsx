import React, { useState, useRef, useEffect } from 'react';
import api from '../../api/axios';

export default function SystemCommands() {
    const [logs, setLogs] = useState([
        { type: 'info', text: 'System Console initialized. Ready for operations.' },
    ]);
    const [runningCommand, setRunningCommand] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [confirmText, setConfirmText] = useState('');
    const [commandToConfirm, setCommandToConfirm] = useState(null);
    const [customCommand, setCustomCommand] = useState('');
    const terminalEndRef = useRef(null);

    // Secondary password protection states
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [consolePassword, setConsolePassword] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [verifying, setVerifying] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('console_password');
        if (stored) {
            verifyPasswordOnMount(stored);
        }
    }, []);

    const verifyPasswordOnMount = async (pwd) => {
        try {
            const res = await api.post('/admin/commands/verify-password', { password: pwd });
            if (res.data.success) {
                setConsolePassword(pwd);
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem('console_password');
            }
        } catch (err) {
            localStorage.removeItem('console_password');
        }
    };

    const handleAuthSubmit = async (e) => {
        e.preventDefault();
        setVerifying(true);
        setAuthError('');
        try {
            const res = await api.post('/admin/commands/verify-password', { password: inputPassword });
            if (res.data.success) {
                setConsolePassword(inputPassword);
                setIsAuthenticated(true);
                localStorage.setItem('console_password', inputPassword);
            }
        } catch (err) {
            setAuthError(err.response?.data?.message || 'Authentication failed. Please try again.');
        } finally {
            setVerifying(false);
        }
    };

    const handleLockConsole = () => {
        setIsAuthenticated(false);
        setConsolePassword('');
        setInputPassword('');
        localStorage.removeItem('console_password');
    };

    const commandsList = [
        {
            group: 'Caching & Optimization',
            items: [
                {
                    key: 'optimize_clear',
                    title: 'Optimize & Clear Caches',
                    command: 'php artisan optimize:clear',
                    desc: 'Clears all cached configurations, routes, and compiled views to resolve runtime sync issues.',
                    icon: 'delete_sweep',
                    color: 'text-amber-400',
                    bg: 'bg-amber-500/10',
                },
                {
                    key: 'optimize_cache',
                    title: 'Compile & Optimize Cache',
                    command: 'php artisan optimize',
                    desc: 'Compiles and caches all configurations, routes, and views to maximize performance in production.',
                    icon: 'speed',
                    color: 'text-emerald-400',
                    bg: 'bg-emerald-500/10',
                },
                {
                    key: 'config_clear',
                    title: 'Clear Configuration Cache',
                    command: 'php artisan config:clear',
                    desc: 'Resets the environment and configuration cache, reloading .env files immediately.',
                    icon: 'settings_suggest',
                    color: 'text-blue-400',
                    bg: 'bg-blue-500/10',
                },
                {
                    key: 'config_cache',
                    title: 'Cache Configuration',
                    command: 'php artisan config:cache',
                    desc: 'Combines all configuration files into a single cached file for rapid load times.',
                    icon: 'tune',
                    color: 'text-sky-400',
                    bg: 'bg-sky-500/10',
                },
                {
                    key: 'route_clear',
                    title: 'Clear Route Cache',
                    command: 'php artisan route:clear',
                    desc: 'Clears the route registration cache to refresh list of available API endpoints.',
                    icon: 'alt_route',
                    color: 'text-indigo-400',
                    bg: 'bg-indigo-500/10',
                },
                {
                    key: 'route_cache',
                    title: 'Cache Route Map',
                    command: 'php artisan route:cache',
                    desc: 'Caches the routing mapping registry to decrease routing processing overhead.',
                    icon: 'hub',
                    color: 'text-violet-400',
                    bg: 'bg-violet-500/10',
                },
                {
                    key: 'view_clear',
                    title: 'Clear Compiled Views',
                    command: 'php artisan view:clear',
                    desc: 'Deletes all compiled Blade template files forcing them to recompile on next request.',
                    icon: 'layers_clear',
                    color: 'text-pink-400',
                    bg: 'bg-pink-500/10',
                },
                {
                    key: 'cache_clear',
                    title: 'Clear Application Cache',
                    command: 'php artisan cache:clear',
                    desc: 'Clears all values from the application cache store database/redis immediately.',
                    icon: 'cleaning_services',
                    color: 'text-rose-400',
                    bg: 'bg-rose-500/10',
                },
            ]
        },
        {
            group: 'Database Operations',
            items: [
                {
                    key: 'migrate',
                    title: 'Run Migrations',
                    command: 'php artisan migrate --force',
                    desc: 'Runs any pending database migrations safely. Utilizes --force to bypass confirmation checks.',
                    icon: 'database',
                    color: 'text-cyan-400',
                    bg: 'bg-cyan-500/10',
                },
                {
                    key: 'migrate_fresh_seed',
                    title: 'Fresh Database & Seed',
                    command: 'php artisan migrate:fresh --seed --force',
                    desc: 'Drops all tables, re-runs all migrations, and runs seeders. WARNING: Wipes all database data!',
                    icon: 'warning',
                    color: 'text-error',
                    bg: 'bg-error/10',
                    isDangerous: true,
                },
                {
                    key: 'db_seed',
                    title: 'Run Database Seeders',
                    command: 'php artisan db:seed --force',
                    desc: 'Safely runs seeders to update the system details (such as CEO message, contact, team members) without deleting user data.',
                    icon: 'history_edu',
                    color: 'text-emerald-400',
                    bg: 'bg-emerald-500/10',
                },
            ]
        },
        {
            group: 'Application Utilities',
            items: [
                {
                    key: 'storage_link',
                    title: 'Create Storage Link',
                    command: 'php artisan storage:link',
                    desc: 'Generates the symlink connecting public/storage to storage/app/public to expose files.',
                    icon: 'link',
                    color: 'text-teal-400',
                    bg: 'bg-teal-500/10',
                },
                {
                    key: 'npm_run_build',
                    title: 'Build Assets (Vite)',
                    command: 'npm run build',
                    desc: 'Runs the Vite production compiler to compile and package all CSS/JS assets on the server.',
                    icon: 'build',
                    color: 'text-fuchsia-400',
                    bg: 'bg-fuchsia-500/10',
                },
            ]
        }
    ];

    // Scroll to bottom of terminal when logs update
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    const addLog = (type, text) => {
        const timestamp = new Date().toLocaleTimeString();
        setLogs((prev) => [...prev, { type, text, timestamp }]);
    };

    const handleRunCommand = async (commandKey) => {
        const cmdInfo = commandsList
            .flatMap((g) => g.items)
            .find((item) => item.key === commandKey);

        if (!cmdInfo) return;

        // Danger verification check
        if (cmdInfo.isDangerous && !showConfirmModal) {
            setCommandToConfirm(commandKey);
            setShowConfirmModal(true);
            setConfirmText('');
            return;
        }

        setRunningCommand(commandKey);
        addLog('input', `guest@ar-system-admin:~$ ${cmdInfo.command}`);
        addLog('info', `Starting execution: ${cmdInfo.title}...`);

        try {
            const response = await api.post('/admin/commands/run', { 
                command: commandKey,
                console_password: consolePassword
            });
            const data = response.data;

            if (data.success) {
                addLog('output', data.output);
                addLog('success', `Success: ${data.message || 'Command executed.'}`);
            } else {
                addLog('error', data.output || 'No output details provided.');
                addLog('error', `Execution failed: ${data.message || 'Error occurred.'}`);
            }
        } catch (error) {
            console.error('Artisan Command Error:', error);
            if (error.response?.status === 401) {
                setIsAuthenticated(false);
                localStorage.removeItem('console_password');
                alert('Console session expired or password updated. Please re-authenticate.');
                return;
            }
            const errorMsg = error.response?.data?.output || error.response?.data?.message || error.message;
            addLog('error', errorMsg);
            addLog('error', `Fatal: Command execution aborted.`);
        } finally {
            setRunningCommand(null);
        }
    };

    const handleCustomCommandSubmit = async (e) => {
        e.preventDefault();
        if (!customCommand.trim()) return;

        const cmdText = customCommand.trim();
        setCustomCommand('');
        
        setRunningCommand('custom');
        addLog('input', `guest@ar-system-admin:~$ ${cmdText}`);
        addLog('info', `Starting custom command execution: ${cmdText}...`);

        try {
            const response = await api.post('/admin/commands/run', { 
                command: 'custom',
                custom_command: cmdText,
                console_password: consolePassword
            });
            const data = response.data;

            if (data.success) {
                addLog('output', data.output);
                addLog('success', `Success: ${data.message || 'Command executed.'}`);
            } else {
                addLog('error', data.output || 'No output details provided.');
                addLog('error', `Execution failed: ${data.message || 'Error occurred.'}`);
            }
        } catch (error) {
            console.error('Artisan Command Error:', error);
            if (error.response?.status === 401) {
                setIsAuthenticated(false);
                localStorage.removeItem('console_password');
                alert('Console session expired or password updated. Please re-authenticate.');
                return;
            }
            const errorMsg = error.response?.data?.output || error.response?.data?.message || error.message;
            addLog('error', errorMsg);
            addLog('error', `Fatal: Command execution aborted.`);
        } finally {
            setRunningCommand(null);
        }
    };

    const confirmDangerousCommand = () => {
        if (confirmText.toUpperCase() !== 'CONFIRM WIPE') {
            alert('Please enter "CONFIRM WIPE" exactly as instructed to proceed.');
            return;
        }

        const command = commandToConfirm;
        setShowConfirmModal(false);
        setCommandToConfirm(null);
        setConfirmText('');
        handleRunCommand(command);
    };

    const copyTerminalOutput = () => {
        const fullText = logs
            .map((log) => `[${log.timestamp || ''}] ${log.type.toUpperCase()}: ${log.text}`)
            .join('\n');
        navigator.clipboard.writeText(fullText);
        addLog('info', 'Console logs copied to clipboard.');
    };

    const clearLogs = () => {
        setLogs([{ type: 'info', text: 'Console buffer cleared. Ready.' }]);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center p-4">
                <div className="bg-surface border border-outline-variant/30 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    {/* Top warning line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
                    
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary animate-pulse">
                            <span className="material-symbols-outlined text-3xl">security</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-white">Authorize Command Console</h4>
                            <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                                Enter the secondary server configuration password to unlock full command capabilities and Vite builds.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleAuthSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                                Console Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={inputPassword}
                                onChange={(e) => setInputPassword(e.target.value)}
                                className="w-full px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                                required
                            />
                        </div>

                        {authError && (
                            <div className="p-3 bg-error/10 border border-error/20 rounded-lg text-xs text-error font-medium flex gap-2">
                                <span className="material-symbols-outlined text-sm shrink-0">info</span>
                                {authError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={verifying}
                            className="w-full bg-primary text-on-primary py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
                        >
                            {verifying ? (
                                <>
                                    <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full"></span>
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-sm">lock_open</span>
                                    Authorize Console
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-outline-variant/30 pb-6">
                <div>
                    <h3 className="font-bold text-lg uppercase tracking-wider text-white">System Commands Console</h3>
                    <p className="text-xs text-on-surface-variant mt-1">Execute maintenance scripts and optimize configurations directly on the server host environment.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleLockConsole}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider text-error bg-error/10 rounded-md border border-error/20 hover:bg-error/20 transition-all"
                    >
                        <span className="material-symbols-outlined text-xs">lock</span>
                        Lock Console
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-green-400 uppercase tracking-wider font-mono-data">System Node: Online</span>
                    </div>
                </div>
            </div>

            {/* Split layout */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Available Commands Panel */}
                <div className="lg:col-span-7 space-y-8">
                    {commandsList.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-4">
                            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">
                                {group.group}
                            </h4>
                            
                            <div className="grid gap-4">
                                {group.items.map((cmd) => {
                                    const isRunning = runningCommand === cmd.key;
                                    const isAnyRunning = runningCommand !== null;
                                    return (
                                        <div
                                            key={cmd.key}
                                            className={`bg-surface p-5 rounded-xl border transition-all ${
                                                cmd.isDangerous
                                                    ? 'border-error/20 hover:border-error/40 bg-gradient-to-br from-surface to-error/[0.01]'
                                                    : 'border-outline-variant/30 hover:border-outline-variant/60'
                                            }`}
                                        >
                                            <div className="flex items-start gap-4 justify-between">
                                                <div className="flex gap-4">
                                                    <div className={`p-3 rounded-lg ${cmd.bg} ${cmd.color} flex items-center justify-center shrink-0`}>
                                                        <span className="material-symbols-outlined text-xl">
                                                            {cmd.icon}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-sm text-white flex items-center gap-2">
                                                            {cmd.title}
                                                            {cmd.isDangerous && (
                                                                <span className="bg-error/15 text-error px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-extrabold animate-pulse">
                                                                    Destructive
                                                                </span>
                                                            )}
                                                        </h5>
                                                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                                                            {cmd.desc}
                                                        </p>
                                                        <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[10px] text-primary bg-primary/5 border border-primary/10 rounded px-2.5 py-1 w-max">
                                                            <span className="material-symbols-outlined text-[12px]">terminal</span>
                                                            {cmd.command}
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleRunCommand(cmd.key)}
                                                    disabled={isAnyRunning}
                                                    className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 ${
                                                        cmd.isDangerous
                                                            ? isAnyRunning 
                                                                ? 'bg-outline-variant/20 text-on-surface-variant cursor-not-allowed'
                                                                : 'bg-error text-white hover:brightness-110'
                                                            : isAnyRunning
                                                                ? 'bg-outline-variant/20 text-on-surface-variant cursor-not-allowed'
                                                                : 'bg-primary text-on-primary hover:brightness-110 shadow-lg shadow-primary/10'
                                                    }`}
                                                >
                                                    {isRunning ? (
                                                        <>
                                                            <span className="animate-spin inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full"></span>
                                                            Running
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="material-symbols-outlined text-sm">play_arrow</span>
                                                            Execute
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Console Output Panel */}
                <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-4">
                    <div className="flex justify-between items-center pl-1">
                        <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                            Console Logs
                        </h4>
                        <div className="flex gap-2">
                            <button
                                onClick={copyTerminalOutput}
                                className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-on-surface-variant bg-surface-container rounded-md border border-outline-variant/30 hover:text-white transition-all"
                                title="Copy full console buffer"
                            >
                                <span className="material-symbols-outlined text-xs">content_copy</span>
                                Copy Output
                            </button>
                            <button
                                onClick={clearLogs}
                                className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-on-surface-variant bg-surface-container rounded-md border border-outline-variant/30 hover:text-white transition-all"
                                title="Clear console buffer"
                            >
                                <span className="material-symbols-outlined text-xs">delete_outline</span>
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* Styled Terminal Box */}
                    <div className="bg-[#0b0e14] border border-outline-variant/40 rounded-xl overflow-hidden shadow-2xl flex flex-col">
                        {/* Terminal Header */}
                        <div className="bg-[#121820] px-4 py-3 flex items-center justify-between border-b border-outline-variant/20">
                            <div className="flex gap-1.5 items-center">
                                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                            </div>
                            <span className="text-[10px] font-semibold font-mono text-on-surface-variant tracking-wider uppercase">
                                System_Command_Console.sh
                            </span>
                            <div className="w-12"></div> {/* Spacer */}
                        </div>

                        {/* Terminal Body */}
                        <div className="p-5 h-[450px] overflow-y-auto font-mono text-xs leading-relaxed space-y-3.5 flex flex-col justify-start select-text bg-[#0c0f17]">
                            {logs.map((log, idx) => {
                                let style = 'text-white/90';
                                if (log.type === 'input') style = 'text-sky-400 font-bold';
                                if (log.type === 'error') style = 'text-rose-400 font-bold border-l-2 border-rose-500 pl-2 bg-rose-500/5 py-1';
                                if (log.type === 'success') style = 'text-emerald-400 font-bold border-l-2 border-emerald-500 pl-2 bg-emerald-500/5 py-1';
                                if (log.type === 'info') style = 'text-yellow-500/80';
                                
                                return (
                                    <div key={idx} className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] text-white/20 select-none">
                                            <span>{log.type.toUpperCase()}</span>
                                            <span>{log.timestamp}</span>
                                        </div>
                                        <div className={`${style} whitespace-pre-wrap break-words font-mono`}>
                                            {log.text}
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={terminalEndRef} />
                            
                            {/* Interactive prompt line when idle */}
                            {!runningCommand && (
                                <form onSubmit={handleCustomCommandSubmit} className="flex items-center gap-1.5 text-sky-400 font-bold pt-2 w-full">
                                    <span className="shrink-0 select-none">guest@ar-system-admin:~$</span>
                                    <input
                                        type="text"
                                        value={customCommand}
                                        onChange={(e) => setCustomCommand(e.target.value)}
                                        placeholder="Type artisan command (e.g. route:list) and press Enter..."
                                        className="bg-transparent text-white focus:outline-none border-none p-0 m-0 w-full font-mono text-xs select-text placeholder-white/20"
                                        disabled={runningCommand !== null}
                                        autoFocus
                                    />
                                </form>
                            )}

                            {/* Loader when running */}
                            {runningCommand && (
                                <div className="flex items-center gap-2 text-yellow-500 select-none pt-2 font-bold animate-pulse">
                                    <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full"></span>
                                    <span>Executing Artisan task...</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* Confirm Danger Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-sm transition-opacity">
                    <div className="bg-surface border border-error/30 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                        {/* Red danger gradient background detail */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-error"></div>
                        
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-error/15 text-error rounded-xl shrink-0">
                                <span className="material-symbols-outlined text-2xl">warning</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white">Confirm Destructive Action</h4>
                                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                                    You are about to run a highly destructive database operation:
                                    <br />
                                    <strong className="text-white font-mono block mt-1 bg-surface-container p-2 rounded border border-outline-variant/30 text-[11px]">
                                        php artisan migrate:fresh --seed --force
                                    </strong>
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-3.5 bg-error/5 border border-error/20 rounded-lg">
                                <p className="text-[11px] text-error font-semibold leading-relaxed flex gap-2">
                                    <span className="material-symbols-outlined text-sm shrink-0">info</span>
                                    This command will drop ALL database tables, erase all application records, and re-run seeders. This cannot be undone!
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                                    Type <span className="text-error font-bold">CONFIRM WIPE</span> to proceed:
                                </label>
                                <input
                                    type="text"
                                    placeholder="CONFIRM WIPE"
                                    value={confirmText}
                                    onChange={(e) => setConfirmText(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-error"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end pt-2 border-t border-outline-variant/20">
                            <button
                                onClick={() => {
                                    setShowConfirmModal(false);
                                    setCommandToConfirm(null);
                                    setConfirmText('');
                                }}
                                className="px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-on-surface-variant bg-surface-container hover:bg-surface-container-high transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDangerousCommand}
                                disabled={confirmText.toUpperCase() !== 'CONFIRM WIPE'}
                                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                                    confirmText.toUpperCase() === 'CONFIRM WIPE'
                                        ? 'bg-error text-white hover:brightness-110 shadow-lg shadow-error/15'
                                        : 'bg-outline-variant/20 text-on-surface-variant cursor-not-allowed'
                                }`}
                            >
                                Execute Wipe
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
