
<!DOCTYPE html>
<html ng-app="qmatiq" ng-controller="globalController">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title ng-bind="headTitulo"></title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
        @yield('css')
    </head>
    <body>
        <div >
            <div ng-view></div>
        </div>
        <footer>
            <script src="{{ asset('js/lib.js') }}"></script>
            <script src="{{ asset('js/app.js') }}"></script>
            <script src="{{ asset('js/models.js') }}"></script>
            <script src="{{ asset('js/controllers.js') }}"></script>
            <script src="{{ asset('js/modals.js') }}"></script>
        </footer>
    </body>
</html>
