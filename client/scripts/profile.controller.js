angular.module('zeebra').controller('ProfileCtrl',ProfileCtrl);

function ProfileCtrl($scope, $reactive, $stateParams){
	$reactive(this).attach($scope);
	
	let chatId = $stateParams.chatId;
	this.helpers({
    data() {
      return Chats.findOne(chatId);
    }
  });
}