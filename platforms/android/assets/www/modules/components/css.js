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
.controller('CardsCtrl', function($scope) {
	$scope.lists = [
	                    { title: 'Cards', id: 'Cards' },
	                    { title: 'Card Headers and Footers', id: 'CardHF' },
	                    { title: 'Card Lists', id: 'CardLists' },
	                    { title: 'Card Images', id: 'CardImages' },
	                    { title: 'Card Showcase', id: 'CardShowcase' },
	                  ];
})
.controller('CardCtrl', function($scope, $stateParams) {
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
.controller('FormsCtrl', function($scope) {
	$scope.lists = [
	                    { title: 'Text Input: Placeholder Labels', id: 'PlaceholderLabels' },
	                    { title: 'Text Input: Inline Labels', id: 'InlineLabels' },
	                    { title: 'Text Input: Stacked Labels', id: 'StackedLabels' },
	                    { title: 'Text Input: Floating Labels', id: 'FloatingLabels' },
	                    { title: 'Inset Forms', id: 'InsetForms' },
	                    { title: 'Inset Inputs', id: 'InsetInputs' },
	                    { title: 'Header Inputs', id: 'HeaderInputs' },
	                  ];
})
.controller('FormCtrl', function($scope, $stateParams) {
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
.controller('TabsCtrl', function($scope) {
	$scope.lists = [
	                    { title: 'Tabs', id: 'Tabs' },
	                    { title: 'Icon-only Tabs', id: 'Icon-only' },
	                    { title: 'Top Icon Tabs', id: 'Top-Icon' },
	                    { title: 'Left Icon Tabs', id: 'Left-Icon' },
	                    { title: 'Striped Style Tabs', id: 'Striped-Style' }
	                  ];
})
.controller('TabCtrl', function($scope, $stateParams) {
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

