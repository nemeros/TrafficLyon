(function(){
	'use strict';
	
	angular.module('MapJsApp')
		.controller('mainController', mainController);
	
	mainController.$inject = ['$scope', '$http', '$log'];
	
	function mainController($scope, $http, $log){
		var vm = this;
		
		vm.msg = "Réponse !";
		
		vm.lyon = {lat: 45.77699455, lng: 4.82488845, zoom: 9};
		
		vm.error = null;
		
		vm.refreshData = refreshData;
		var getStyle = getStyle;
		var getColor = getColor;
		var bindFeature = bindFeature;
		
		
		function bindFeature(feature, layer){
			var popupOptions = {maxWidth: 200};
			layer.bindPopup("<b>Site name:</b> " + feature.properties.publiccomment, popupOptions);
		}
		
		function getColor(etat){
			var couleur = "blue";
			
			if(etat == "G" || etat == "*"){
				couleur = "green";
			}
			if(etat == "N"){
				couleur = "grey";
			}
			if(etat == "V"){
				couleur == "red";
			}
			
			return couleur;
		}
		
		function getStyle(feature){
			return {
				weight: 2,
				opacity: 1,
				fillOpacity: 0.7
			}
		}
		
		function refreshData(){
		
			$http.get("api/trafic").then(
					function successCallBack(response){
						vm.geojson = {
								data: response.data,
								onEachFeature: bindFeature
						};
						vm.error = null;
					},
					function errorCallBack(response){
						vm.error = angular.toJson(response);
					});
		};
	}
})();