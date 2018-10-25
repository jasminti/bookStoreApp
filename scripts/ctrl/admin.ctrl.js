var app = angular.module('bookStoreApp')
app.controller('adminCtrl', function ($scope, $http, $routeParams, dataService){
    refresh()

    $scope.delUser = function (user) {
        var ans = confirm("Jeste sigurni da zelite obrisati " + user.name + " ?")
        if( ans === true){
            dataService.delete("users", user.id, function(data){
                alert("Person deleted");
                refresh()
            })
        }
    }

    function refresh() {
        dataService.list("users", function(data){
            $scope.users = data
        })
    }
})