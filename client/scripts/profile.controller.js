angular.module('zeebra').controller('ProfileCtrl',ProfileCtrl);

function ProfileCtrl($scope, $reactive, $stateParams){
	$reactive(this).attach($scope);
	
	let profileId = $stateParams.profileId;
	this.helpers({
    data() {
      return Chats.findOne(profileId);
    }
  });
}