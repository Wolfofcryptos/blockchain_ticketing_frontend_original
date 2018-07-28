/*



*/


var booknow = pulseapp.controller('booknow', function ($scope,$rootScope,ngProgressFactory,$mdDialog,item,$mdToast,BlockChainData) { 
	console.log(item)
   $scope.progressbar = ngProgressFactory.createInstance();
	$scope.eventName=item.event_name;
  $scope.eventDesc=item.description;
  $scope.eventVenue=item.venue;
  $scope.eventPrice = item.priceOfTicket;
$scope.ctltext = $rootScope.controlText ;
$scope.adminchk=$rootScope.userStatus;
console.log($scope.ctltext)

 $scope.getTicketscount = function(){

        $scope.requestParam={eventId:item._id}; 
        $scope.serviceType="eventmanager/getAvailableTickets";
        BlockChainData.getdata($scope.requestParam,$scope.serviceType,$scope.OnSuccessTicketCount,$scope.OnFailureTicketCount);


     }
  

$scope.OnSuccessTicketCount = function(response){
console.log(response.data.data.tickets.length);
  $scope.ticketCount=response.data.data.tickets.length;
}

	$scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.bookTickets = function(){
      $scope.progressbar.start();
    	if(localStorage.getItem("accessToken") != null){
			$scope.requestParam={eventId:item._id}; 
  			$scope.serviceType="user/buyTicket";
  			BlockChainData.postData($scope.requestParam,$scope.serviceType,$scope.OnSuccessBookEvent,$scope.OnFailureBookEvent);

    	}else{

        $scope.showSimpleToast('Please Login To Book');
      }

    

    }


    $scope.OnSuccessBookEvent = function(response){

    	console.log(response)
      $mdDialog.cancel();
      $scope.progressbar.complete();
      $scope.showSimpleToast('Tickets Booked');
    }

    $scope.OnFailureBookEvent = function(){
      console.log("failed")
      $scope.progressbar.complete();
 $scope.showSimpleToast('Error Try Again');

    }



    $scope.showSimpleToast = function(text) {

    $mdToast.show(
      $mdToast.simple()
        .textContent(text)
        .position('top right')
        .hideDelay(3000)
    );
  };

  if($rootScope.userStatus=='Admin'){
$scope.getTicketscount();
    
  }

});