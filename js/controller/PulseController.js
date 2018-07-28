
var pulseController = pulseapp.controller('pulseController', function ($rootScope,$scope,$state,BlockChainData,$animate,ngProgressFactory,fileUpload,$mdDialog) {
		
		$scope.sessionmaintain = function(){
			console.log(localStorage.getItem("accessToken") );
			if(localStorage.getItem("accessToken") != null){

				if(localStorage.getItem("role") == "eventManager"){
					$rootScope.userStatus='Admin';
					$rootScope.controlText="Details";
				}else{
					$rootScope.controlText="Book Now";
				}
				$rootScope.usertext="Hi "+localStorage.getItem("FName");
				$rootScope.settings="Change Password";
				$rootScope.loggedin=false;
				$rootScope.eventManagerLogin=false
				$rootScope.logout=false;
			}else{
				$rootScope.eventManagerLogin=true
			}

		}


		$scope.clearall = function(){
			$rootScope.userStatus='';
			localStorage.clear();
			$state.reload();
		}

		$scope.reportlist = function(){

			console.log("called");
			$state.go('home.report');
			$scope.firstname='True';
			$scope.secondName='Ticketing';
			$scope.mail='true.ticketing@yahoo.com';
			$scope.pwd="trueticketing";
			$scope.serviceType="user/register";
			$scope.requestParam={first_name:$scope.firstname,last_name:$scope.secondName,emailId:$scope.mail,password:$scope.pwd};

			

		}

		$scope.OnSuccessRegister = function(response) {

			console.log('registered');
			console.log(response);
		}

		$scope.OnFailureRegister = function(){

			console.log('failed')
		}


		$scope.hometab = function(){
			$rootScope.SelectedIndex='Home';
			$state.go('home.report')
		}
		$scope.ticketstab= function(){

			$rootScope.SelectedIndex='Tickets';
			$state.go('home.tickets');
		}

		$scope.eventstab= function(){
			
			$rootScope.SelectedIndex='Events';
			$state.go('home.Events');
		}

	$scope.signin = function(ev,x) {
	if($rootScope.settings=="LogIn"){

		$mdDialog.show({

      templateUrl: 'templates/ReadMore.html',
    //  controller: readmoreController,
      parent: angular.element(document.body),
      locals:{item:x},
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })


	}else{


		$mdDialog.show({

      templateUrl: 'templates/popup.html',
    //  controller: readmoreController,
      parent: angular.element(document.body),
      locals:{item:x},
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
	 

	}
    
  };

  $scope.eventLogin = function(ev) {
	if($rootScope.settings=="LogIn"){
		$mdDialog.show({

      templateUrl: 'templates/eventManger.html',
    //  controller: readmoreController,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })


	}else{


		$mdDialog.show({

      templateUrl: 'templates/popup.html',
     // controller: 'changepwd',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
	 

	}
    
  };

 function readmoreController($scope, $mdDialog,item) {


 }

		$scope.init= function() {
			$rootScope.SelectedIndex='Home';
			$rootScope.usertext="LogIn";
			$rootScope.settings="User LogIn";
			$rootScope.loggedin=true;
			$rootScope.logout=true;
			$scope.reportlist();
			$rootScope.controlText="Book Now";
			$scope.sessionmaintain();
			


		//$scope.reportlist('report');
	}


	$scope.init();



});
