webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('myApp',[]);



	__webpack_require__(1);





/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var angular = __webpack_require__(2);
	var control = __webpack_require__(4);



	angular.module('myApp').controller('dashboardController',['$scope','$http',control]);




/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var angular = __webpack_require__(2);

	function control($scope,$http) {

		$scope.apiKey = "7642d2dacbaa96c7f8f55b4972c0d78cf73f422d8a86bf8ed5bf4e3c57c274a2";

	        $scope.init = function() {
	            //API requires a start date
	            var today = new Date();
	            //Create the date string and ensure leading zeros if required
	            var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);


	            $http({
				    url: "https://api.trakt.tv/calendars/all/movies/2014-09-01/7",
				    dataType: "json",
				    method: "GET",
				    headers: {
				        "Content-Type": "application/json",
				        "trakt-api-version":2,
				        "trakt-api-key":$scope.apiKey
				    },
				    data:''
				}).success(function(response){
				    console.log(response)
				});


	            // $http.get("http://api.trakt.tv/search/movies.format/" + $scope.apiKey).success(function(resp){
	            // 	console.log(resp)
	            // });
	            // $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
	            //     console.log(data);
	            // }).error(function(error) {
	            // 	console.log(error)
	    	
		
				}

	}
	module.exports = control;

/***/ }
]);