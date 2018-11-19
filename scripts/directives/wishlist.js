var app = angular.module('bookStoreApp')
app.directive('wishList', function (){
    var wishListCtrl = function ($scope, $rootScope, dataService) {
        $scope.addToList = function (book) {
            dataService.insert('wishlist/' + book, {}, function (data) {
                $rootScope.myListItems = data;
            })
        }
    }
    return {
        restrict: "E",
        scope: {data: "="},
        template: "<button class=\"btn btn-default ml-10\" ng-click=\"addToList(data)\">Add to wish list</button>",
        controller: wishListCtrl
    }
})