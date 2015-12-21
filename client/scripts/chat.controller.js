angular.module('zeebra').controller('ChatCtrl', ChatCtrl);
 
function ChatCtrl ($scope, $reactive, $stateParams, $ionicScrollDelegate, $timeout, $ionicPopover) {
  $reactive(this).attach($scope);
  var popover;

  window.addEventListener('native.keyboardhide', autoScroll);
  window.addEventListener('native.keyboardshow', autoScroll);

  $timeout(function() {
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
    });
  
  let chatId = $stateParams.chatId;

  this.sendMessage = sendMessage;
  this.showPopover = showPopover;
  
  this.helpers({
    data() {
      return Chats.findOne(chatId);
    },
    messages() {
      return Messages.find({ chatId: chatId });
    }
  });



  function sendMessage() {
    $timeout(function() {
      $('#message').focus();//very lazy to define the directives. so found out a easy but effective way
      cordova.plugins.Keyboard.show();
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom();
    },0);

    if (_.isEmpty(this.message)) return;
    Meteor.call('newMessage', {
      text: this.message,
      //type: 'text',
      chatId: chatId
    });
    delete this.message;
  }


  function autoScroll() {
   
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
  }


 $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope
  }).then(function(pop) {
    popover = pop;
  });
 


function showPopover($event){
  popover.show($event);
}


}