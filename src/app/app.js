(function(){
    'use strict';
    angular
        .module('movieApp',['ngRoute','ngAnimate'])
        .config(moduleConfig);

    function moduleConfig($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.tmpl.html',
                controller: 'homeController',
                controllerAs: 'homeVm'
            })
            .when('/search', {
                templateUrl: 'app/views/search.tmpl.html',
                controller: 'contentSearchController',
                controllerAs: 'contentSearchVm'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
})();
