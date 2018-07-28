
var eventController = pulseapp.controller('eventController', function ($scope, $rootScope,ngProgressFactory,BlockChainData,$mdDialog) {
		
		
	$scope.progressbar = ngProgressFactory.createInstance();	
$scope.eventList = [];

		$scope.userEventsDetails = function (){
			$scope.progressbar.start();
			
			if($rootScope.userStatus=='Admin'){

			$scope.requestType="eventmanager/getEvent";
			$scope.requestParam={};
			BlockChainData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessEventsDetails,$scope.OnfailureEventsDetails)
			}else{
			
			}
			
			

		}

		$scope.OnSuccessEventsDetails = function(response) {
			$scope.eventList = response.data.data.eventData;
			$scope.progressbar.complete();
			console.log("user event success");
			


	}

	$scope.OnfailureEventsDetails=function(response){

		console.log("Usr events failed");
		$scope.progressbar.complete();
	}

   $scope.bookNow = function(ev,x) {
    $mdDialog.show({

      templateUrl: 'templates/BookNow.html',
      controller: 'booknow',
      parent: angular.element(document.body),
      locals:{item:x},
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };

	$scope.init = function(){

		$scope.userEventsDetails()
			}




	$scope.init();

});
