(function(){
	'use strict';
	
	angular.module('MapJsApp')
		.controller('mainController', mainController);
	
	mainController.$inject = ['$scope', '$http', '$log'];
	
	function mainController($scope, $http, $log){
		var vm = this;
		
		vm.msg = "Hello !";
		
		vm.lyon = {lat: 45.77699455, lng: 4.82488845, zoom: 10};
		
		$http.get("static/geo.json").then(
				function successCallBack(response){
					vm.geojson = {
							data: response.data,
							style: {
								fillColor: 'green',
								weight: 2,
								opacity: 1,
								color: 'red',
								fillOpacity: 0.7
							}
					};
					$log.info(angular.toJson(response))
				},
				function errorCallBack(response){
					$log.error(angular.toJson(response));
				});
	}
})();