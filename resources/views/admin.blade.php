<!DOCTYPE html>
<html class="scroll-smooth dark" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>AR Engineering | Admin Panel</title>
    
    <!-- Google Fonts - McLaren -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css?family=McLaren:700|McLaren:400&display=swap" rel="stylesheet">
    
    <!-- Material Symbols -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    
    <!-- Vite Assets -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/admin.jsx'])
</head>
<body class="bg-surface text-on-surface font-sans antialiased admin-body">
    <div id="admin-app"></div>
</body>
</html>
