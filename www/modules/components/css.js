angular.module('css.controllers', [])
.controller('HeaderCtrl', function($scope,$ionicPopup,$ionicActionSheet,$timeout,AppConfig) {
	$scope.headerStyle=AppConfig.headerStyle;
	$scope.showCardName = 'Buttons';
	
	$scope.changHeader = function(headerStyle){
		$scope.headerStyle=headerStyle;
		console.log("chang header style:" + headerStyle);
	};
	
	$scope.showCard = function(showCardName){
		$scope.showCardName = showCardName;
	}
})
.controller('ListsCtrl', function($scope) {
	$scope.lists = [
	                    { title: 'List Dividers', id: 'ListDividers' },
	                    { title: 'List Icons', id: 'ListIcons' },
	                    { title: 'List Buttons', id: 'ListButtons' },
	                    { title: 'Item Avatars', id: 'ItemAvatars' },
	                    { title: 'Item Thumbnails', id: 'ItemThumbnails' },
	                    { title: 'Inset Lists', id: 'InsetLists' }
	                  ];
})
.controller('ListCtrl', function($scope, $stateParams) {
	$scope.listTitle =  $stateParams.listTitle;;
	$scope.chatlists = [
	                    { title: 'Reggae', id: 1 ,img:'img/avatar-1.jpg',lastMessage:'你好！'},
	                    { title: 'Chill', id: 2 ,img:'img/avatar-2.jpg',lastMessage:'谢谢！'},
	                    { title: 'Dubstep', id: 3,img:'img/avatar-3.jpg' ,lastMessage:'下午开会！'},
	                    { title: 'Indie', id: 4 ,img:'img/avatar-4.jpg',lastMessage:'汇报下工作！'},
	                    { title: 'Rap', id: 5 ,img:'img/avatar-5.jpg',lastMessage:'工作已经完成！'},
	                    { title: 'Cowbell', id: 6 ,img:'img/avatar-6.jpg',lastMessage:'明天见！'}
	                  ];
})


;

