var app = angular.module('bookStoreApp');
app.controller('authorsCtrl', function ($scope, dataService, $uibModal) {

    dataService.list("authors", function (data) {
        $scope.authors = data;
    });

    $scope.showAuthor = function (id) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view/author.html',
            controller: 'authorCtrl',
            size: 'xl',
            resolve: { authorId: id},
        })
    };

    $scope.showRate = function (rate, id) {
        var url = 'authors/' + id + '/' + rate;
        dataService.insert(url, {}, function (data) {
            rate = data.rating;
        })
    }

})