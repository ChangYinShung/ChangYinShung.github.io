var app = angular.module('MainApp', ['ui.router', 'ngMaterial', 'ngMdIcons', ]);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('green');

});