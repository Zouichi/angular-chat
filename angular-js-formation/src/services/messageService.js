angular.module('demoApp').factory('MessageService', function($http){
	var url = 'https://gentle-brushlands-6591.herokuapp.com/api/messages'

	var myObject = {}

	myObject.getMessages = function() {
		return $http.get(url).then(function(response){
			return response.data
		})
	}

	myObject.postMessages = function(newMessage) {
		console.log(newMessage)
		return $http.post(url).then(function(response){
			console.log(response)
		})
	}

	myObject.messages = [],

	myObject.sendMessage = function(message){
		myObject.messages.push(message)
	}

	return myObject
})