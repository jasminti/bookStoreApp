var app = angular.module('bookStoreApp');
app.factory('dataService', function ($http) {
    var baseURL = "http://lib.teatar.org/api/";
    $http.defaults.headers.common.Authorization = "Bearer 1234567890";

    return {
        list: function(dataSet, callback) {
            var url = baseURL + dataSet;
            $http.get(url)
                .then(function (response) {
                    callback(response.data)
                }, function (reason) {
                    console.log("Greska u pristupu");
                    callback(false)
                })
        }
    }
})