var app = angular.module('bookStoreApp')
app.controller('usersCtrl', function ($scope, $http, $routeParams, $location, dataService){
    /*$scope.id = $routeParams.id;
    if( $scope.id == 0){
        $scope.user = {id: 0, active: true}
    }
    else{
        dataService.read("users", $scope.id, function (data) {
            $scope.emp = data
        })
    }*/
    refresh()
    function refresh() {
        dataService.list("users", function(data){
            $scope.users = data
        })
    }

})