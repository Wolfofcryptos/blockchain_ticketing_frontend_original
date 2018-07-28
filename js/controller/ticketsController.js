/*



*/


var ticketsController = pulseapp.controller('ticketsController', function ($scope, $rootScope,ngProgressFactory,BlockChainData,$mdDialog) {  

$scope.accessToken=sessionStorage.getItem('accessToken');  
$scope.ticketList=[];
$scope.progressbar = ngProgressFactory.createInstance();




$scope.getUserTickets= function(){

	  $scope.progressbar.start();
	$scope.requestParam={};
	$scope.requestType="user/userBoughtTickets";
	BlockChainData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessGetTickets,$scope.OnfailureGetTickets)


}



$scope.getEventmanagerEvents = function(){

	  $scope.progressbar.start();
	$scope.requestParam={};
	$scope.requestType="eventmanager/getEvent";
	BlockChainData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessEventmanagerEvents,$scope.OnfailureEventmanagerEvents);
}


$scope.OnSuccessEventmanagerEvents = function(response){


$scope.eventList = response.data.data.eventData;
$scope.progressbar.complete();
}

$scope.OnfailureEventmanagerEvents = function(){

	$scope.progressbar.complete();
	console.log('Failure');
}

$scope.getBoughtTickets = function(id){

	 $scope.progressbar.start();
	$scope.requestParam={eventId:id};
	$scope.requestType="eventmanager/getBoughtTickets";
	BlockChainData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessBoughtTickets,$scope.OnfailureBoughtTickets)

}

$scope.OnSuccessBoughtTickets = function(response){
$scope.ticketList=response.data.data.tickets;
 $scope.progressbar.complete();

}

$scope.OnfailureBoughtTickets = function(){
 $scope.progressbar.complete();
	console.log("failed");
}


$scope.OnSuccessGetTickets = function(response){
	console.log(response.data.data.tickets)
	$scope.ticketList=response.data.data.tickets;
	 $scope.progressbar.complete();
	


}

$scope.OnfailureGetTickets = function(){

	console.log("Get Tickets  Failed");
	 $scope.progressbar.complete();
	//$scope.progressbar.complete();
}

 $scope.details = function(ev,x) {
    $mdDialog.show({

      templateUrl: 'templates/ticketDetails.html',
      controller: 'ticketDetailsController',
      parent: angular.element(document.body),
      locals:{item:x},
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };

$scope.change = function(myval){

	console.log(myval._id)
	$scope.getBoughtTickets(myval._id)
}

$scope.init = function(){

if($rootScope.userStatus == 'Admin'){

	$scope.getEventmanagerEvents();

}else{
$scope.getUserTickets();

}
}



$scope.init();

});


