app.controller('labController', [
    '$scope', 'registration',

    function($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;

        function submit(model) {
            registration.submit(model).$promise.then(function(response) {
                    alert('Success');
                },
                function(response) {
                    alert('Error');
                });
            //alert('Submitted\n' + JSON.stringify(model));
        }

        reset();

        function reset() {
            $scope.model = {}
        }
    }
]);