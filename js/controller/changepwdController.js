 var changepwd = pulseapp.controller('changepwd', function ($scope, $rootScope,BlockChainData,ngProgressFactory,$mdDialog,$mdToast) {
  
 $scope.progressbar = ngProgressFactory.createInstance();
  $scope.save = function(){
   $scope.progressbar.start();
    if($scope.pwdchange == $scope.pwdconfirmChange && $scope.oldpwd != ''){

      if($rootScope.userStatus == 'Admin'){
      $scope.requestParam={oldPassword:$scope.oldpwd,newPassword:$scope.pwdchange}; 
      $scope.serviceType="eventmanager/changePassword";
      BlockChainData.putData($scope.requestParam,$scope.serviceType,$scope.OnSuccesschangePwd,$scope.OnFailurechangePwd); 

      }else{
          $scope.requestParam={oldPassword:$scope.oldpwd,newPassword:$scope.pwdchange}; 
      $scope.serviceType="user/changePassword";
        BlockChainData.postData($scope.requestParam,$scope.serviceType,$scope.OnSuccesschangePwd,$scope.OnFailurechangePwd); 
      }

      
    }else{
      alert("Password Error! Please Try Again")
    }
  }

  
  $scope.OnSuccesschangePwd = function(response){
$scope.progressbar.complete();
$scope.showSimpleToast('PassWord Changed!');
 $mdDialog.cancel();
  }

  $scope.OnFailurechangePwd = function(){
$scope.progressbar.complete();
    $scope.showSimpleToast("Error Try Again");
    // $mdDialog.cancel();
  }

 $scope.cancel = function() {
      $mdDialog.cancel();
    };
   
$scope.showSimpleToast = function(text) {

    $mdToast.show(
      $mdToast.simple()
        .textContent(text)
        .position('top right')
        .hideDelay(3000)
    );
  };


});