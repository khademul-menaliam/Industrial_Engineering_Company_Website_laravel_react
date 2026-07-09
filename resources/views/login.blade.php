<!DOCTYPE html>
<html class="scroll-smooth dark" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titan Precision v2 | Admin Login</title>
    
    <!-- Material Symbols -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    
    <!-- Vite Assets -->
    @vite(['resources/css/app.css'])
</head>
<body class="bg-surface text-on-surface font-sans antialiased min-h-screen flex items-center justify-center relative overflow-hidden">
    
    <!-- Background overlay / ambient glow -->
    <div class="absolute inset-0 z-0 bg-cover bg-center opacity-10" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQgqWhbGQlWq4PyZp-s8QEE87QZaxQWLz-n0Hn-FRaWNE6fAIhagXoFDmQgbh494h-X-Jr2irQmLbSm4A2StBPTHGMTVaUcC7TixKaUJo5oUGzvVYyAULCK9VSwNFWFK79hgA1VRQUN9nx0_PqEiLK4rAa2qfJwpSnoag-__zhs4moJQ5eI5t7GGp5Nw9S2kboVr2jO0-PI06ZUUVh3zB_k7qt2PuX3UNeBIr1nqA5z83nV_SDfGSrNw')"></div>
    <div class="absolute inset-0 z-10 bg-gradient-to-br from-surface-container-lowest/90 to-primary-container/30"></div>

    <!-- Login Card -->
    <div class="relative z-20 w-full max-w-md p-10 bg-surface-container-lowest/80 backdrop-blur-md rounded-xl border border-outline-variant/30 shadow-2xl">
        <div class="text-center mb-8">
            <div class="inline-block px-4 py-1 bg-secondary-container/10 border border-secondary-container/30 rounded-full mb-4">
                <span class="text-secondary font-semibold text-xs tracking-widest uppercase">Titan Security Portal</span>
            </div>
            <h2 class="text-2xl font-bold uppercase tracking-tight text-white">System Access</h2>
            <p class="text-on-surface-variant text-sm mt-2">Enter your admin credentials to sign in</p>
        </div>

        @if ($errors->any())
            <div class="mb-6 p-4 bg-error-container/20 border border-error-container/40 rounded-lg text-error text-sm">
                <ul class="list-disc list-inside">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" action="/titan-secure/login" class="space-y-6">
            @csrf

            <!-- Email Input -->
            <div class="space-y-2">
                <label for="email" class="block text-sm font-semibold tracking-wider uppercase text-on-surface-variant">Email Address</label>
                <div class="relative flex items-center">
                    <span class="material-symbols-outlined absolute left-3 text-outline">mail</span>
                    <input type="email" name="email" id="email" value="{{ old('email') }}" required autofocus
                        class="w-full pl-10 pr-4 py-3 bg-surface-container/50 border border-outline-variant/50 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                </div>
            </div>

            <!-- Password Input -->
            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <label for="password" class="block text-sm font-semibold tracking-wider uppercase text-on-surface-variant">Password</label>
                </div>
                <div class="relative flex items-center">
                    <span class="material-symbols-outlined absolute left-3 text-outline">lock</span>
                    <input type="password" name="password" id="password" required
                        class="w-full pl-10 pr-4 py-3 bg-surface-container/50 border border-outline-variant/50 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center">
                <input type="checkbox" name="remember" id="remember" 
                    class="rounded bg-surface-container/50 border-outline-variant/50 text-primary focus:ring-primary focus:ring-offset-surface">
                <label for="remember" class="ml-2 text-sm text-on-surface-variant select-none">Remember this device</label>
            </div>

            <!-- Submit Button -->
            <button type="submit" 
                class="w-full py-4 rounded-lg bg-secondary-container text-on-secondary-container font-bold hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-secondary-container/20 flex justify-center items-center gap-2">
                <span class="text-sm tracking-widest uppercase">Authorize Connection</span>
                <span class="material-symbols-outlined text-lg">vpn_key</span>
            </button>
        </form>
    </div>

</body>
</html>
