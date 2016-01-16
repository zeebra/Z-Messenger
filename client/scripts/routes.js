angular.module('zeebra').config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chats.html',
          controller: 'ChatsCtrl as chats'
        }
      }
    })
    .state('chat', {
      url: '/chats/:chatId',
      templateUrl: 'client/templates/chat.html',
      controller: 'ChatCtrl as chat'
    })


    .state('profile', {
      url: '/profile/:profileId',
      templateUrl: 'client/templates/profile.html',
      controller: 'ProfileCtrl as profile'
    })

    .state('tab.feed', {
      url: '/feed',
      views: {
        'tab-feed': {
          templateUrl: 'client/templates/chats.html'
        }
      }
    })
    .state('tab.contacts', {
      url: '/contacts',
      views: {
        'tab-contacts': {
          templateUrl: 'client/templates/chats.html'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/chats');
}
