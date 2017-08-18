(function () {
    'use strict';
    angular
        .module('movieApp')
        .service('tvShowSearchService', tvShowSearchService);
    tvShowSearchService.$inject = ['$http', '$q', 'CONFIG'];

    function tvShowSearchService($http, $q, CONFIG) {
        var self = this;
        self.getTVShows = getTVShows;
        self.API_KEY = "?api_key=aa28fa35121e2530e2b2599ea639dc61";
        self.URL = "https://api.themoviedb.org/3/";
        self.SEARCH = "search/tv";
        self.QUERY = "&query=";

        function getTVShows(searchTVShows) {
            return $http.get(CONFIG.API_HOST + self.SEARCH + self.API_KEY + self.QUERY + searchTVShows).then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }
    }
})();
