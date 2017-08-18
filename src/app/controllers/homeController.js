(function () {
    'use strict';
    angular
        .module('movieApp')
        .controller('homeController', homeController);
    homeController.$inject = [];

    function homeController() {
        var homeVm = this;
        console.log("Home Controller");
    }
})();
