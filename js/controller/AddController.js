 

 var addController = pulseapp.controller('addController', function ($scope, $rootScope,BlockChainData,ngProgressFactory,$window,$mdDialog,$mdToast) {
  

  $scope.progressbar = ngProgressFactory.createInstance();
  
$scope.cancel = function() {
      $mdDialog.cancel();
    };

  $scope.addEvent = function(){

  $scope.progressbar.start();
  $scope.requestParam={event_name:$scope.eventName,description:$scope.eventDesc,venue:$scope.eventVenue,numberOfTickets:$scope.eventTks,priceOfTicket:$scope.eventPrice}; 
  $scope.serviceType="eventmanager/createEvent";
  BlockChainData.postData($scope.requestParam,$scope.serviceType,$scope.OnSuccessAddEvent,$scope.OnFailureAddEvent);  



  }

  $scope.OnSuccessAddEvent = function(response){

  	console.log("event Added");
  	$mdDialog.cancel();
    $scope.progressbar.complete();
  	 $scope.showSimpleToast('Event Added');

  }

$scope.OnFailureAddEvent = function(){

    $scope.progressbar.complete();
     $scope.showSimpleToast('Add Event Failed');

  }


  $scope.showSimpleToast = function(text) {

    $mdToast.show(
      $mdToast.simple()
        .textContent(text)
        .position('top right')
        .hideDelay(3000)
    );
  };


});