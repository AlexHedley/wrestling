var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.shows = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/shows.json';

        $http.get(file)
        .then(function(response) {
            $scope.shows = response.data.shows;
        });
    };

    $scope.init();
});