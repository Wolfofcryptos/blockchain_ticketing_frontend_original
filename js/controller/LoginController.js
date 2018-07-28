




var loginController = pulseapp.controller('loginController', function ($scope, $rootScope,ngProgressFactory,$state,BlockChainData,$mdDialog,$mdToast) {
	
$scope.register=false;
//$rootScope.settings="Profile Settings";

  $scope.progressbar = ngProgressFactory.createInstance();
$scope.showregister=function(){
	$scope.register=true;

}

$scope.login = function(){
 $scope.progressbar.start();
	$scope.mailId=$scope.vm.formData.email;
	$scope.password=$scope.vm.formData.password;
	$scope.requestParam={emailId:$scope.mailId,password:$scope.password};	
	$scope.serviceType="user/login";
	BlockChainData.Login($scope.requestParam,$scope.serviceType,$scope.OnSuccessLogin,$scope.OnFailureLogin);	

}

$scope.OnSuccessLogin = function(response){
console.log(response.data.data.accessToken);
localStorage.setItem("accessToken",response.data.data.accessToken);
localStorage.setItem("FName",response.data.data.userDetails.first_name);
localStorage.setItem("LName",response.data.data.userDetails.last_name);
localStorage.setItem("mailId",response.data.data.userDetails.emailId);
localStorage.setItem("userId",response.data.data.userDetails._id);
$rootScope.eventManagerLogin=false;
$rootScope.controlText="Book Now";
$rootScope.logout=false;
$rootScope.usertext="Hi "+response.data.data.userDetails.first_name;
$rootScope.settings="Change Password";
$rootScope.loggedin=false;
console.log($rootScope.loggedin);
 $scope.cancel();
  $scope.progressbar.complete();
}

 $scope.cancel = function() {
      $mdDialog.cancel();
    };

   
$scope.OnFailureLogin = function(){
$scope.progressbar.complete();
$scope.showSimpleToast("Login Failed! Try Again");

}
 
$scope.registration=function(){

	 $scope.progressbar.start();

			$scope.firstname=$scope.vm.formData.Firstname;
			$scope.secondName=$scope.vm.formData.Lastname;
			$scope.mail=$scope.vm.formData.emailregister;
			$scope.pwd=$scope.vm.formData.passwordregister;
			$scope.serviceType="user/register";
			$scope.requestParam={first_name:$scope.firstname,last_name:$scope.secondName,emailId:$scope.mail,password:$scope.pwd};	
			BlockChainData.Login($scope.requestParam,$scope.serviceType,$scope.OnSuccessRegister,$scope.OnFailureRegister);	
}


$scope.OnSuccessRegister = function(response){

		console.log(response.data.data.accessToken)

		$scope.vm.formData.Firstname='';
		$scope.vm.formData.Lastname='';
		$scope.vm.formData.emailregister='';
		$scope.vm.formData.passwordregister='';
		$scope.register=false;
		 $scope.progressbar.complete();
}
$scope.OnFailureRegister = function (){


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
