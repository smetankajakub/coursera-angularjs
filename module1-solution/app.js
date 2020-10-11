(function () {
  'use strict'
  angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.list = [];

		$scope.splitValues = (function(){
			let index = 0
			if($scope.list.length > 0){
				let splittedList = $scope.list.split(',');
				angular.forEach(splittedList, function(item){
					if(item.trim().length === 0){
						splittedList.splice(index, 1);
					}
					index++;
				});
				$scope.color = 'green';
				if(splittedList.length > 3){
					$scope.message = 'Too Much!';
				} else {
					$scope.message = 'Enjoy!';
				}
			} else {
				$scope.message = 'Please enter data first';
				$scope.color = 'red';
			}
		});

		$scope.getClass = (function(){
			if($scope.color === 'red'){
				return 'has-error';
			} else if($scope.color === 'green'){
				return 'has-success';
			} else {
				return '';
			}
		});
	}
	
})();
