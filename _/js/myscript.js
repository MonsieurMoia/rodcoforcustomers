var customerapp= angular.module('customerapp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
customerapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/productos', {
			templateUrl: 'productos.html',
			controller: 'productosController'
    	}).
    	when('/confirmarorden', {
			templateUrl: 'confirmarorden.html',
			controller: 'confirmarordenController'
    	}).
      	otherwise({
			redirectTo: '/productos'
    });
}]);


customerapp.controller('productosController', function($scope) {

});


customerapp.controller('confirmarordenController', function($scope) {

});

//Function for Dynamic Searching and Selecting Products
function productsController($scope){
	//List of Products
	$scope.products = [
		{
			name: 'CANDADOS YALE 11840 VISUAL BLISTER',


function searchProductsController($scope){
	$scope.products = [
		{
			name: 'CANDADOS YALE 11840 VISUAL BLISTER',
			price: 3201.00,
			active: false	
		},
		{
			name: 'CANDADO YALE ITALIANO 11360 ESPIGA LARGA',
			price: 7850.00,
			active: false	
		},
		{
			name: 'CERRADURA YALE AUTOMOVIL 49016',
			price: 3500.00,
			active: false	
		},
		{
			name: 'CERRADURA YALE AUTOMOVIL 89520C',
			price: 6700.00,
			active: false	
		},
		{
			name: 'CIERRA PUERTA YALE 1002 SB',
			price: 9050.00,
			active: false	
		},
		{
			name: 'DISCO HILCO CORTE METAL 9" x 3/32',
			price: 1356.00,
			active: false	
		},
		{
			name: 'SOLDADURA HILCO BRONCE 1/16.',
			price: 14551.00,
			active: false	
		},
		{
			name: 'SOLDADURA HILCO MIG 0.8mm AL VACIO 5 KG',
			price: 7824.00,
			active: false	
		},
		{
			name: 'MASCARA HILCO SOLDAR ELECTRONICA',
			price: 97778.00,
			active: false	
		},
		{
			name: 'LLAVE DE CONTROL PLOMER ANGULAR 1/2 x 1/2',
			price: 2265.00,
			active: false	
		},
		{
			name: 'FILTRO COFLEX P/FREGADERO WF 600',
			price: 6000.00,
			active: false	
		}

	];
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};
	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.products, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
