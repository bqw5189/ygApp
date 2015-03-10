angular.module('tabs.controllers', [])
.controller('HomeCtrl', function($scope,$ionicPopup,$ionicActionSheet,$timeout,MenuButton) {
 $scope.chatlists = [
    { title: 'Reggae', id: 1 ,img:'img/avatar-1.jpg',lastMessage:'你好！'},
    { title: 'Chill', id: 2 ,img:'img/avatar-2.jpg',lastMessage:'谢谢！'},
    { title: 'Dubstep', id: 3,img:'img/avatar-3.jpg' ,lastMessage:'下午开会！'},
    { title: 'Indie', id: 4 ,img:'img/avatar-4.jpg',lastMessage:'汇报下工作！'},
    { title: 'Rap', id: 5 ,img:'img/avatar-5.jpg',lastMessage:'工作已经完成！'},
    { title: 'Cowbell', id: 6 ,img:'img/avatar-6.jpg',lastMessage:'明天见！'}
  ];
  $scope.shouldShowDelete = false;
	 $scope.shouldShowReorder = false;
	 $scope.listCanSwipe = true;
	 
	 $scope.data = {
	    showDelete: false
	  };
	  
	 $scope.toTop = function(item, fromIndex) {
	    $scope.chatlists.splice(fromIndex, 1);
	    $scope.chatlists.splice(0, 0, item);
	  };
				  
	  $scope.reorderItem = function(item, fromIndex, toIndex) {
	    $scope.chatlists.splice(fromIndex, 1);
	    $scope.chatlists.splice(toIndex, 0, item);
	  };
			  
	  $scope.del = function(index) {
		  var confirmPopup = $ionicPopup.confirm({
			     title: '删除聊天记录',
			     template: '确认删除该记录?'
			   });
		  confirmPopup.then(function(res) {
			  $scope.chatlists.splice(index, 1);
			     console.log('删除聊天记录');
			   });
	    
	  };
	  $scope.share = function(item) {
		// Show the action sheet
		   var hideSheet = $ionicActionSheet.show({
		     buttons: [
		       { text: '发送到朋友圈' },
		       { text: '发送微信好友' },
		       { text: '发送QQ好友' },
		       { text: '转发' }
		     ],
		     titleText: '分享消息',
		     cancelText: '取消',
		     cancel: function() {
		          // add cancel code..
		        },
		     buttonClicked: function(index) {
		       return true;
		     }
		   });

		   // For example's sake, hide the sheet after two seconds
		   $timeout(function() {
		     hideSheet();
		   }, 2000);
	  };
	  
	  $scope.moveItem = function(item, fromIndex, toIndex) {
	    $scope.items.splice(fromIndex, 1);
	    $scope.items.splice(toIndex, 0, item);
	  };
	  
	  $scope.onItemDelete = function(item) {
	    $scope.items.splice($scope.items.indexOf(item), 1);
	  };
	 
});
