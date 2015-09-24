angular.module("myApp", [])

var quotesfunction = function($scope){
	$scope.quoteArray = []

	$scope.submit = function(){
		var quoteObject = {}
		quoteObject.quote = $scope.quoteToAdd || "empty"
		quoteObject.author = $scope.authorToAdd || "empty"
		$scope.quoteArray.push(quoteObject)
		$scope.quote = ""
		$scope.author = ""


		$scope.deleteClick = function($index){
			$scope.quoteArray.splice($index,1)
		}

		// quoteObject.rating = $scope.ratingToAdd 
		$scope.submitRating = function($index){
			quoteObject.rating = $scope.ratingToAdd
			// $scope.quoteArray.sort(quoteObject.rating)
			console.log($scope.quoteArray)
		}


		$scope.ratingToAdd = quoteObject.rating
		// $scope.rating0 = quoteObject.rating = 0
		// $scope.rating1 = quoteObject.rating = 1
		// $scope.rating2 = quoteObject.rating = 2
		// $scope.rating3 = quoteObject.rating = 3
		// $scope.rating4 = quoteObject.rating = 4
		// $scope.rating5 = quoteObject.rating = 5
	}

			




}

angular.module("myApp").controller("myController", ["$scope", quotesfunction])