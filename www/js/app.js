// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('field', ['ionic', 'field.controllers','tabs.controllers','css.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.factory('AppConfig', function() {
	  return {
		  headerStyle: 'bar-positive'
		  }
		})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.tabs', {
	    url: "/tabs",
	    views: {
	      'menuContent': {
	        templateUrl: "templates/tabs.html"
	      }
	    }
	  })
  .state('app.tabs.chats', {
    url: "/chats",
    views: {
      'chats-tab': {
        templateUrl: "modules/chat/chats.html",
        controller: 'ChatsCtrl'
      }
    }
  })
  .state('app.chat', {
	    url: "/chats/:chatId",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/chat/chat.html",
	        controller:'ChatCtrl'
	      }
	    }
	  })
//CSS 组件
  .state('app.css', {
    url: "/css",
    views: {
      'menuContent': {
        templateUrl: "modules/components/css/css.html",
        controller:'ChatCtrl'
      }
    }
  })
  .state('app.header', {
	    url: "/header",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/header.html",
	        controller:'HeaderCtrl'
	      }
	    }
	  })
  .state('app.footer', {
	    url: "/footer",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/footer.html",
	        controller:'HeaderCtrl'
	      }
	    }
	  })
  .state('app.button', {
	    url: "/button",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/button.html",
	        controller:'HeaderCtrl'
	      }
	    }
	  })
  .state('app.lists', {
	    url: "/lists",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/lists.html",
	        controller:'ListsCtrl'
	      }
	    }
	  })
 .state('app.list', {
	    url: "/lists/:listTitle",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/list.html",
	        controller:'ListCtrl'
	      }
	    }
	  })
  .state('app.cards', {
	    url: "/cards",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/cards.html",
	        controller:'CardsCtrl'
	      }
	    }
	  })
 .state('app.card', {
	    url: "/cards/:listTitle",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/card.html",
	        controller:'CardCtrl'
	      }
	    }
	  })
  .state('app.forms', {
	    url: "/forms",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/forms.html",
	        controller:'FormsCtrl'
	      }
	    }
	  })
 .state('app.form', {
	    url: "/forms/:listTitle",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/form.html",
	        controller:'FormCtrl'
	      }
	    }
	  })
 .state('app.toggle', {
	    url: "/toggle",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/toggle.html",
	        controller:'FormsCtrl'
	      }
	    }
	  })
  .state('app.checkbox', {
	    url: "/checkbox",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/checkbox.html",
	        controller:'FormsCtrl'
	      }
	    }
	  })
  .state('app.radio', {
	    url: "/radio",
	    views: {
	      'menuContent': {
	        templateUrl: "modules/components/css/radio.html",
	        controller:'FormsCtrl'
	      }
	    }
	  })	  
	  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tabs/chats');
 
});
