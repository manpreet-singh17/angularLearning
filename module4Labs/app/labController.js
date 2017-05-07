app.controller('labController', [
    '$scope', '$timeout', '$q', '$http', 'gitHub',

    function($scope, $timeout, $q, $http, gitHub) {

        $scope.model = {
            number: 0,
            result: 'Ready',
        };

        $scope.checkOddNumber = checkOddNumber; //refering checkOddNumber to $scope.checkOddNumber.
        $scope.getRepos = getRepos; //refering getRepos to $scope.getRepos.
        $scope.loadDetails = loadDetails;

        //get specific repo's details from github.
        /*function loadDetails(name) {
            var url = 'https://api.github.com/repos/angular/' + name;
            $http.get(url).then(function(response) {
                $scope.model.details = response.data;
            }, function(response) {
                $scope.model.details = { error: true, message: "Error: " + response.data.message };
            });
        }*/

        //loadDetails using gitHub service.
        function loadDetails(name, org) {
            $scope.model.details = null;
            $scope.model.details = gitHub.getDetail({ id: name, org: org });
        }

        //get repos from github using api call.
        /*function getRepos() {
            $http.get('https://api.github.com/orgs/angular/repos')
                .then(function(response) {
                    $scope.model.repos = response.data;
                }, function(response) {
                    $scope.model.repos = [{ message: 'Error..' + response.data.message }]
                });
        }*/

        //loadDetails using gitHub service.
        function getRepos(org) {
            gitHub.getAll({ org: org }).$promise.then(function(response) {
                $scope.model.repos = response;
                $scope.model.error = false;
                console.log(response);
            }, function(response) {
                $scope.model.error = { error: "Error " + response.data.message };
                console.log(response);
            });
        }

        //create wrapper function for checking a number is odd or not.
        function checkOddNumber(input) {

            $scope.model.result = 'Working...';

            //calling a promise and using then() method on that.
            checkOddNumberHandler(input).then(function(result) {
                $scope.model.result = 'Success.. ' + result;

            }, function(result) {
                $scope.model.result = 'Error.. ' + result;
            })
        }

        //creating promise named checkOddNumber.
        function checkOddNumberHandler(input) {

            var defer = $q.defer(); //instantiating a promise obj.

            //$timeout() method to delay 1 second.
            $timeout(function() {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);
            return defer.promise;
        }

        //creating isNumberOdd function.
        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }

    }

]);