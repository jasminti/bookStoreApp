var app = angular.module('bookStoreApp');
app.factory('dataService', function ($http, $rootScope) {
    var baseURL = "http://lib.teatar.org/api/";
    $http.defaults.headers.common.Authorization = "Bearer 1234567890";

    return {
        list: function(dataSet, callback) {
            var url = baseURL + dataSet;
            $rootScope.wait = true;
            $http.get(url)
                .then(function (response) {
                    $rootScope.wait = false;
                    callback(response.data)
                }, function (reason) {
                    console.log("Greska u pristupu");
                    $rootScope.wait = false;
                    callback(false)
                })
        },
        read: function(dataSet, id, callback) {
            var url = baseURL + dataSet + "/" + id;
            $rootScope.wait = true;
            $http.get(url)
                .then(function (response) {
                    $rootScope.wait = false;
                    callback(response.data)
                }, function (reason) {
                    console.log("Greska u pristupu");
                    $rootScope.wait = false;
                    callback(false)
                })
        },
        insert: function (dataSet, data, callback) {
            var url = baseURL + dataSet;
            $rootScope.wait = true;
            $http.post(url, data)
                .then(function (response) {
                    $rootScope.wait = false;
                    callback(response.data)
                }, function (reason) {
                    console.log("nesto ne radi");
                    $rootScope.wait = false;
                    callback(false)
                })
        },
        update: function (dataSet, data, id, callback) {
            var url = baseURL + dataSet + "/" + id;
            $rootScope.wait = true;
            $http.put(url, data)
                .then(function (response) {
                    $rootScope.wait = false;
                    callback(response.data)
                }, function (reason) {
                    console.log("nesto ne radi");
                    $rootScope.wait = false;
                    callback(false)
                })
        },
        delete: function (dataSet, id, callback) {
            var url = baseURL + dataSet + "/" + id;
            $rootScope.wait = true;
            $http.delete(url)
                .then(function (response) {
                    $rootScope.wait = false;
                    callback(true)
                }, function (reason) {
                    console.log("nesto ne radi");
                    $rootScope.wait = false;
                    callback(false)
                })
        }

    }
})