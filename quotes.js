angular.module("myApp", [])

var quotesfunction = function($scope){
	$scope.quoteArray = []
	// $scope.quoteToAdd = $scope.quote
	// $scope.authorToAdd = $scope.author
	// $scope.text = "author";
	// $scope.authorToAdd = $scope.text;
	$scope.submit = function(){
		var quoteObject = {}
		quoteObject.quote = $scope.quoteToAdd || "empty"
		quoteObject.author = $scope.authorToAdd || "empty"
		$scope.quoteArray.push(quoteObject)
		$scope.quote = ""
		$scope.author = ""





		// if($scope.text){
		// 	$scope.quoteArray.push(this.text);
		// 	$scope.text="";
		// }
			
		
	$scope.deleteClick = function(){
		$scope.quoteArray.pop(quoteObject)
	}
	}




}




angular.module("myApp").controller("myController", ["$scope", quotesfunction])