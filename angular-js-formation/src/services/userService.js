	angular.module('demoApp').factory('userService', function($http) {
	var url = 'https://gentle-brushlands-6591.herokuapp.com/api/users'
	var myService = {}
		myService.registerUser = function(user) {
			return $http.post(url, user)
		}

		myService.getUsers = function() {
			return $http.get(url).then(function(response) {
				response.data
		})
	}

	return myService
})