/*



*/


var ticketDetailsController = pulseapp.controller('ticketDetailsController', function ($scope,$rootScope,ngProgressFactory,$mdDialog,item,$mdToast,BlockChainData) { 

    console.log(">>>>>>",item,item.eventDescription,item.eventVenue);
    $scope.eventName=item.eventName;
$scope.eventDescription= item.eventDescription;
$scope.eventVenue=item.eventVenue;
$scope.ticketOwner=localStorage.getItem("FName");
$scope.ticketPrice=item.price;

$scope.cancel=function(){

   $mdDialog.cancel();
  
}
});