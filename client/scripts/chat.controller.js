angular.module('zeebra').controller('ChatCtrl', ChatCtrl);
 
function ChatCtrl ($scope, $reactive, $stateParams, $ionicScrollDelegate, $timeout, $ionicPopover, $state) {
  $reactive(this).attach($scope);

  window.addEventListener('native.keyboardhide', autoScroll);
  window.addEventListener('native.keyboardshow', autoScroll);

  $timeout(function() {
      $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
    });
  
  let chatId = $stateParams.chatId;

  this.sendMessage = sendMessage;
  
  this.helpers({
    data() {
      return Chats.findOne(chatId);
    },
    messages() {
      return Messages.find({ chatId: chatId });
    }
  });

  //popever function callbacks
  this.profile = profile;
  this.theme = theme;
  this.search = search
  this.clear = clear;
  this.block = block;



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


$ionicPopover.fromTemplateUrl('templates/chat.popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover; //tried respecting the scope
    //this.popever = popever;// not works
  });

  //popever handlers

  function profile(){
    console.log('profile');
    $scope.popover.hide();
    $state.go('tab.profile');
  }

  function theme(){
    console.log('theme');
  }

  function search(){
    console.log('search'); 
  }

  function clear(){
    console.log('clear');
  }

  function block(){
    console.log('block');
  }

}