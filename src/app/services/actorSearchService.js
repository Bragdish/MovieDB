(function () {
    'use strict';
    angular
        .module('movieApp')
        .service('actorSearchService', actorSearchService);
    actorSearchService.$inject = ['$http', '$q', 'CONFIG'];

    function actorSearchService($http, $q, CONFIG) {
        var self = this;
        self.getActors = getActors;
        self.API_KEY = "?api_key=aa28fa35121e2530e2b2599ea639dc61";
        self.URL = "https://api.themoviedb.org/3/";
        self.SEARCH = "search/person";
        self.QUERY = "&query=";

        function getActors(searchActors) {
            return $http.get(CONFIG.API_HOST + self.SEARCH + self.API_KEY + self.QUERY + searchActors).then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }
    }
})();
