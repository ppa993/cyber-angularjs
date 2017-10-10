(function() {
    var app = angular.module('infoApp', []);

    app.controller('InfoController', function($scope, $http) {
        var onCompleted = function(response) {
            $scope.user = response.data;
        };

        var onError = function(reason) {
            $scope.error = "Could not retrieve the user because " + reason.message;
        };

        $http.get("https://api.github.com/users/ppa993")
            .then(onCompleted, onError);
    })
})();
