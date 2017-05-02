app.controller('pizzaController', [
    '$scope',
    function($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availabletoppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: []
        };

        $scope.addTopping = function(topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.successAlert = {
                'display': 'block'
            }
        }

        $scope.hideSuccessAlert = function() {
            $scope.successAlert = {
                'display': 'none'
            }
        }
    }
]);