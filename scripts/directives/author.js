var app = angular.module('bookStoreApp')
app.directive('author', function (){
    return {
        restrict: "E",
        templateUrl: "view/author.html",
        //template: "<h2>{{data.name}}</h2>",
        scope: {data: "="},
        controller: "authorsCtrl"
    }
})