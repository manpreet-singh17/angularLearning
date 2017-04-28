app.controller('menuController', [
    '$scope',
    function($scope) {
        $scope.model = { title: 'Our Menu' };
        $scope.changeMainDish = function(item) {
            $scope.model.mainDish = item;
        };

        $scope.$watch("model.mainDish", function(newValue, oldValue) {
            if (newValue === "BBQ Pizza") {
                $scope.Note = "| This pizza is non veg.";
                //alert("You have selected the non veg BBQ pizza!");
            } else {
                $scope.Note = "";
            }

        });
    }
]);