<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kongsun - 江山控股</title>
    <link rel="shortcut icon" href="{{ config('website.icon') }}">
    <!-- Fonts -->
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<script>

</script>
<!-- JavaScripts -->
<script src="{{'/js/main.js'}}"></script>

<!-- Live Reload -->
@if ( Config::get('app.debug') )
    <script type="text/javascript">
        document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
    </script>
@endif
</body>
</html>

