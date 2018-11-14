var app = angular.module('bookStoreApp');
app.controller('carouselCtrl', function ($scope, dataService){

    dataService.list("carousel", function (data) {
        $scope.data = data;
    })
});