angular.module('demoApp')
.controller('MainController',
['MessageService', '$scope',
function (MessageService, $scope, userService) {
  MessageService.getMessages().then(function(messages){
  	self.messages = messages
  })

  var self = this
    self.messages = MessageService.messages
    self.sendMessage = function(){
    	console.log('sendMessage in main-controller')
    MessageService.postMessages(self.newMessage)
    self.newMessage = ''
    }
}])