(function () {
    'use strict';
    angular
        .module('movieApp')
        .service('mediaSearchService', mediaSearchService);
    mediaSearchService.$inject = ['$http', '$q', 'CONFIG'];

    function mediaSearchService($http, $q, CONFIG) {
        var self = this;
        self.getMedia = getMedia;
        self.API_KEY = "?api_key=aa28fa35121e2530e2b2599ea639dc61";
        self.URL = "https://api.themoviedb.org/3/";
        self.SEARCH = "search/multi";
        self.QUERY = "&query=";

        function getMedia(searchMedia) {
            return $http.get(CONFIG.API_HOST + self.SEARCH + self.API_KEY + self.QUERY + searchMedia).then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }
    }
})();
