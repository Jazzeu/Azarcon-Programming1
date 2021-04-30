(function() {
	'use strict';
	angular.module('MsgApp', []). controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];
	function MsgController($scope){
	$scope.name="Cody";
	$scope.play = "sit";
	$scope.sayMessage= function () {
	return "I want to play with you";
	};
$scope.run = function (){
$scope.play = "run";
};
	
}
})();

