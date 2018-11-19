var app = angular.module('bookStoreApp');

app.directive('wishList', function (){
    var listCtrl = function ($scope, $rootScope, dataService){
        $scope.addToList = function (bookId) {
            dataService.insert('wishlist/' + bookId, {}, function (data) {
                $rootScope.myListItems = data;
            });
        };
    };
    return {
        restrict: "E",
        scope: { book: "=" },
        template: '<button class="btn btn-info" ng-click="addToList(book)">Add to wish list</button>',
        controller: listCtrl
    }
});