app.controller('menuController', [
    '$scope',
    function($scope) {
        $scope.model = { title: 'Our Menu' };

        $scope.changeMainDish = function(item, price) {
            $scope.model.mainDish = {
                name: item,
                price: price
            }
        };

        $scope.$watch("model.mainDish.name", function(newValue, oldValue) {
            if (newValue === "BBQ Pizza") {
                $scope.Note = "| This pizza is non veg.";
                //alert("You have selected the non veg BBQ pizza!");
            } else {
                $scope.Note = "";
            }

        });
    }
]);