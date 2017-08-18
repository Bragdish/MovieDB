(function () {
    'use strict';
    angular
        .module('movieApp')
        .controller('contentSearchController', contentSearchController);
    contentSearchController.$inject = ['mediaSearchService','movieSearchService', 'tvShowSearchService', 'actorSearchService'];

    function contentSearchController(mediaSearchService, movieSearchService, tvShowSearchService, actorSearchService) {
        var contentSearchVm = this;
        contentSearchVm.title = "Content Search Controller";
        contentSearchVm.BACKDROP_SITE_PATH = "https://image.tmdb.org/t/p/w500/";
        contentSearchVm.getMedia = getMedia;
        contentSearchVm.getMovies = getMovies;
        contentSearchVm.getTVShows = getTVShows;
        contentSearchVm.getActors = getActors;

        function getMedia(searchMedia) {
            if (searchMedia !== "") {
                mediaSearchService.getMedia(searchMedia)
                    .then(function (data) {
                        contentSearchVm.results = data.results;
                    }, function (error) {
                        console.log(error);
                    });
            }
            else {
                contentSearchVm.media = "";
            }
        }

        function getMovies(searchMovies) {
            if (searchMovies !== "") {
                movieSearchService.getMovies(searchMovies)
                    .then(function (data) {
                        contentSearchVm.movies = data.results;
                    }, function (error) {
                        console.log(error);
                    });
            }
            else {
                contentSearchVm.movies = "";
            }
        }

        function getTVShows(searchTVShows) {
            if (searchTVShows !== "") {
                tvShowSearchService.getTVShows(searchTVShows)
                    .then(function (data) {
                        contentSearchVm.tvshows = data.results;
                    }, function (error) {
                        console.log(error);
                    });
            }
            else {
                contentSearchVm.tvshows = "";
            }
        }

        function getActors(searchActors) {
            if (searchActors !== "") {
                actorSearchService.getActors(searchActors)
                    .then(function (data) {
                        contentSearchVm.actors = data.results;
                    }, function (error) {
                        console.log(error);
                    });
            }
            else {
                contentSearchVm.actors = "";
            }
        }
    }
})();