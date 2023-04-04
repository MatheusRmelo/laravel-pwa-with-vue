<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WELCOME PWA - WITH VUE</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="manifest" href="/build/manifest.webmanifest">
    <script id="vite-plugin-pwa:register-sw" src="/build/registerSW.js"></script>
</head>

<body>
    <div id="app">
    </div>
</body>

</html>
