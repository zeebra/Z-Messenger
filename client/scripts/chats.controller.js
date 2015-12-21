angular.module('zeebra').controller('ChatsCtrl',ChatsCtrl);

function ChatsCtrl ($scope, $reactive, $ionicPopover){
	$reactive(this).attach($scope);
  this.showPopover = showPopover;
  this.helpers({
    data() {
      return Chats.find();
    }
  });

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope
  }).then(function(pop) {
    popover = pop;
  });

  function showPopover($event){
  popover.show($event);
  }
}
