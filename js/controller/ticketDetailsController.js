/*



*/


var ticketDetailsController = pulseapp.controller('ticketDetailsController', function ($scope,$rootScope,ngProgressFactory,$mdDialog,item,$mdToast,BlockChainData) { 
$scope.eventName=item.eventName;
$scope.eventDetails= item.event;
$scope.eventId=item.id;
$scope.ticketOwner=localStorage.getItem("FName");
$scope.ticketPrice=item.price;

$scope.cancel=function(){

   $mdDialog.cancel();
  
}
});