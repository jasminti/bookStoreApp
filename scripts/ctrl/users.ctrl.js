var app = angular.module('bookStoreApp')
app.controller('usersCtrl', function ($scope, $http, $routeParams, $location, $uibModalInstance, dataService){
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

    $scope.saveUser = function (user) {
        $scope.id = $routeParams.id;
        if( user.id == 0){
            dataService.insert("users", user, function (data) {
                console.log(data);
                $uibModalInstance.dismiss('cancel');
                $location.path('/admin')
            })
        }
        else{
            dataService.update("users", user, user.id, function (data) {
                console.log(data);
                $uibModalInstance.dismiss('cancel');
                $location.path('/admin')
            })
        }
    }
})