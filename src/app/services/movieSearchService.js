(function () {
    'use strict';
    angular
        .module('movieApp')
        .service('movieSearchService', movieSearchService);
    movieSearchService.$inject = ['$http', '$q', 'CONFIG'];

    function movieSearchService($http, $q, CONFIG) {
        var self = this;
        self.getMovies = getMovies;
        self.API_KEY = "?api_key=aa28fa35121e2530e2b2599ea639dc61";
        self.URL = "https://api.themoviedb.org/3/";
        self.SEARCH = "search/movie";
        self.QUERY = "&query=";

        function getMovies(searchMovies) {
            return $http.get(CONFIG.API_HOST + self.SEARCH + self.API_KEY + self.QUERY + searchMovies).then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }
    }
})();
