angular.module("myApp", [])

var quotesfunction = function($scope){
	$scope.quoteArray = []

	$scope.submit = function(){
		var quoteObject = {}
		quoteObject.quote = $scope.quoteToAdd || "empty"
		quoteObject.author = $scope.authorToAdd || "empty"
		quoteObject.rating = $scope.ratingToAdd
		$scope.quoteArray.push(quoteObject)
		$scope.quote = ""
		$scope.author = ""


		$scope.deleteClick = function($index){
			$scope.quoteArray.splice($index,1)
		}
		$scope.randomButton = function(){
			// console.log("Hi!")
			// console.log($scope.quoteArray)
			$scope.randomObject = $scope.quoteArray[Math.floor(Math.random()*($scope.quoteArray.length-1))]
			confirm($scope.randomObject.quote)
		}
		$scope.authorClick = function($index){
			$scope.newAuthorArray = []
			$scope.author = quoteObject[$index].author
			// var callbackFunction = function(){
				for (var i=0; i<$scope.quoteArray.length; i++){
					if(quoteObject[i].author === $scope.author){
						$scope.newAuthorArray.push(quoteObject)
				console.log($scope.newAuthorArray)
				}
					// }
			}
			// console.log("author!")
			// $scope.quoteArray.filter(callbackFunction(author)){
		}

		}
		


	}

			






angular.module("myApp").controller("myController", ["$scope", quotesfunction])