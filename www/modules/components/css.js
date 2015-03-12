angular.module('css.controllers', [])
.controller('HeaderCtrl', function($scope,$ionicPopup,$ionicActionSheet,$timeout,AppConfig) {
	$scope.headerStyle=AppConfig.headerStyle;
	$scope.showCardName = 'Buttons';
	
	$scope.changHeader = function(headerStyle){
		$scope.headerStyle=headerStyle;
		console.log("chang header style:" + headerStyle);
	};
	
	$scope.showCard = function(showCardName){
		$scope.showCardName = showCardName;
	}
});

