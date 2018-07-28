/*



*/

var reportMainController = pulseapp.controller('reportMainController', function ($scope, $rootScope,BlockChainData,ngProgressFactory,$window,$mdDialog,fileUpload,$mdToast,$state) {

	//variables
	$scope.progressbar = ngProgressFactory.createInstance();

//$scope.userStatus='Admin';

$scope.getallEvents = function(){

          $scope.progressbar.start();
  $scope.requestParam={}; 
  if($rootScope.userStatus=='Admin'){
    $scope.serviceType="eventmanager/getEvent";

  }else{

    $scope.serviceType="user/getAllEvent";
  }
  
  BlockChainData.getdata($scope.requestParam,$scope.serviceType,$scope.OnSuccessGetEvents,$scope.OnFailureGetEvents); 
}

$scope.OnSuccessGetEvents = function(response){
$scope.progressbar.complete();
  $scope.EventList = [];
  console.log(response.data)
  $scope.EventList= response.data.data.eventData;
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

   function readmoreController($scope, $mdDialog,item) {
 	console.log(item);
 	$scope.description_readmore=item.report_description;
 	$scope.title_readmore=item.report_title;
 	$scope.url_readmore=item.report_url;
 	$scope.imgurl_readmore=item.report_icon_url;
   
}



	$scope.checkDescription = function(desc){

		if (desc.length > 66) {
   return false;
  }
  else {
   return true;
  }

	}


	  $scope.edcon = function(ev,x) {
    $mdDialog.show({

      templateUrl: 'templates/add.html',
    controller: 'editController',
      parent: angular.element(document.body),
      locals:{item:x,value:'Report'},
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };




  $scope.delete = function(ev,x) {
  	$rootScope.delVal='Report';
    $mdDialog.show({

      templateUrl: 'templates/Delete.html',
      controller: 'deleteController',
      parent: angular.element(document.body),
      locals:{item:x},
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };


  


	   $scope.add = function(ev) {
    $mdDialog.show({

      templateUrl: 'templates/add.html',
      controller: 'addController',
      parent: angular.element(document.body),
    //  locals:{value:'Report',type:''},
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };

 
$rootScope.$on("CallParentMethod", function(){

 $scope.getallEvents();

})

  
    $scope.getallEvents();
  
  




});
