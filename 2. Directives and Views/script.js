(function() {
    var app = angular.module('infoApp', []);

    app.controller('InfoController', function($scope, $http) {
        var onCompleted = function(response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
        }

        var onError = function(reason) {
            $scope.error = "Could not retrieve the user because " + reason.message;
        };

        $scope.search = function() {
            $http.get("https://api.github.com/users/" + $scope.username)
                .then(onCompleted, onError);
        };
        $scope.message = "Github Viewer";
    })
})();
