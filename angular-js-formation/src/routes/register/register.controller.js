angular.module('demoApp').controller('RegisterController', function($location, userService) {
	self=this
	self.register = function() {
		var user = {
			firstname: self.firstname,
			lastname: self.lastname,
			email: self.email,
			pwd: self.pwd
		}
		userService=registerUser()
	}
})