angular.module('zeebra').controller('ChatsCtrl',ChatsCtrl);

function ChatsCtrl ($scope, $reactive){
	$reactive(this).attach($scope);

  this.helpers({
    data() {
      return Chats.find();
    }
  });
}
