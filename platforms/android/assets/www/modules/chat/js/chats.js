

angular.module('tabs.controllers', [])
.controller('ChatsCtrl', function($scope,$ionicPopup,$ionicActionSheet,$timeout,MenuButton) {
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
	 
})
.controller('ChatCtrl', function($scope, $stateParams) {
	$scope.chatId = $stateParams.chatId;
});

//Chat (WebRTC)
//
// Currently supported in Chrome and Firefox only.
// WebRTC support is ultra basic at the moment - send/receive // in current window only.
// Design based on Bookmarks app by // Eyal Zuri - http://dribbble.com/shots/1261465-Bookmarks-app-gif
//
// The below JS has been adapted from this excellent RTCDataChannel demo
// http://simpl.info/rtcdatachannel/

var sendChannel, 
	receiveChannel,
	chatWindow = document.querySelector('.chat-window'),
	chatWindowMessage = document.querySelector('.chat-window-message'),
	chatThread = document.querySelector('.chat-thread');

// Create WebRTC connection
createConnection();

// On form submit, send message
chatWindow.onsubmit = function (e) {
	e.preventDefault();

	sendData();

	return false;
};

function createConnection () {
    var servers = null;

    if (window.mozRTCPeerConnection) {
	    window.localPeerConnection = new mozRTCPeerConnection(servers, {
	        optional: [{
	            RtpDataChannels: true
	        }]
	    });
    } else {
	    window.localPeerConnection = new webkitRTCPeerConnection(servers, {
	        optional: [{
	            RtpDataChannels: true
	        }]
	    });
    }

    try {
        // Reliable Data Channels not yet supported in Chrome
        sendChannel = localPeerConnection.createDataChannel('sendDataChannel', {
            reliable: false
        });
    } catch (e) {
    }

    localPeerConnection.onicecandidate = gotLocalCandidate;
    sendChannel.onopen = handleSendChannelStateChange;
    sendChannel.onclose = handleSendChannelStateChange;

    if (window.mozRTCPeerConnection) {
	    window.remotePeerConnection = new mozRTCPeerConnection(servers, {
	        optional: [{
	            RtpDataChannels: true
	        }]
	    });
    } else {
	    window.remotePeerConnection = new webkitRTCPeerConnection(servers, {
	        optional: [{
	            RtpDataChannels: true
	        }]
	    });
    }

    remotePeerConnection.onicecandidate = gotRemoteIceCandidate;
    remotePeerConnection.ondatachannel = gotReceiveChannel;

    // Firefox seems to require an error callback
    localPeerConnection.createOffer(gotLocalDescription, function (err) {
    });
}

function sendData () {
    sendChannel.send(chatWindowMessage.value);
}

function gotLocalDescription (desc) {
    localPeerConnection.setLocalDescription(desc);
    remotePeerConnection.setRemoteDescription(desc);
    // Firefox seems to require an error callback
    remotePeerConnection.createAnswer(gotRemoteDescription, function (err) {
    });
}

function gotRemoteDescription (desc) {
    remotePeerConnection.setLocalDescription(desc);
    localPeerConnection.setRemoteDescription(desc);
}

function gotLocalCandidate (event) {
    if (event.candidate) {
        remotePeerConnection.addIceCandidate(event.candidate);
    }
}

function gotRemoteIceCandidate (event) {
    if (event.candidate) {
        localPeerConnection.addIceCandidate(event.candidate);
    }
}

function gotReceiveChannel (event) {
    receiveChannel = event.channel;
    receiveChannel.onmessage = handleMessage;
    receiveChannel.onopen = handleReceiveChannelStateChange;
    receiveChannel.onclose = handleReceiveChannelStateChange;
}

function handleMessage (event) {
    var chatNewThread = document.createElement('li'),
    	chatNewMessage = document.createTextNode(event.data);

    // Add message to chat thread and scroll to bottom
    chatNewThread.appendChild(chatNewMessage);
    chatThread.appendChild(chatNewThread);
    chatThread.scrollTop = chatThread.scrollHeight;

    // Clear text value
    chatWindowMessage.value = '';
}

function handleSendChannelStateChange () {
    var readyState = sendChannel.readyState;

    if (readyState == 'open') {
        chatWindowMessage.disabled = false;
        chatWindowMessage.focus();
    	chatWindowMessage.placeholder = "";
    } else {
        chatWindowMessage.disabled = true;
    }
}

function handleReceiveChannelStateChange () {
    var readyState = receiveChannel.readyState;
} 