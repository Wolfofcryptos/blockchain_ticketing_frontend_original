/*
File Name : PulseNavigationService.js
Absolute Path : js/services/PulseNavigationService.js
Author : Flex , Emergining Technologies
Created Date : 04/Sep/2016
Functions :
*/

pulseapp.factory('BlockChainData', function ($rootScope,$http) {

	
	 var host="http://54.214.71.204:8000/api/";
	var objtemplate={
		getdata: function (requestParam,requestType,onSuccess, onFailure){

		$http( {
                params : requestParam,
                method : "GET",
                headers : {'Accept' : 'application/json','Content-Type': 'text/plain','Content-Type': 'application/x-www-form-urlencoded; charset=utf-8','authorization' : 'bearer '+localStorage.getItem('accessToken')},
                url : host+requestType,
                })
                .then(onSuccess, onFailure);

		},
		toparams:function(obj)
        {
          var p = [];
          for (var key in obj)
          {
            p.push(key + '=' + encodeURIComponent(obj[key]));
          }
          return p.join('&');
        },

		getAuthenticate : function (requestParam,serviceType,onSuccuess, onFailure)
        {

          var  url = tempHost1+ loginAPIUrl1+serviceType;

            $http({
                method: 'POST',
                url: url,
                data: objtemplate.toparams(requestParam),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(onSuccuess, onFailure);

        },

         Login : function (requestParam,serviceType,onSuccuess, onFailure)
        {

          var  url = host+serviceType;

            $http({
                method: 'POST',
                url: url,
                data: objtemplate.toparams(requestParam),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(onSuccuess, onFailure);

        },
        putData: function (requestParam,requestType,onSuccess, onFailure){

    $http( {
                params : requestParam,
                method : "PUT",
                headers : {'Accept' : 'application/json','Content-Type': 'text/plain','Content-Type': 'application/x-www-form-urlencoded; charset=utf-8','authorization' : 'bearer '+localStorage.getItem('accessToken')},
                url : host+requestType,
                })
                .then(onSuccess, onFailure);

    },

        postData : function (requestParam,serviceType,onSuccuess, onFailure)
        {

          var  url = host+serviceType;

            $http({
                method: 'POST',
                url: url,
                data: objtemplate.toparams(requestParam),
                headers: {'Content-Type': 'application/x-www-form-urlencoded',
                            'authorization' : 'bearer '+localStorage.getItem('accessToken')
                          }
                }).then(onSuccuess, onFailure);

        },


          getLog: function (requestParam,requestType,onSuccess, onFailure){
             var  url = tempHost+ loginAPIUrl+requestType;

    $http( {
                params : requestParam,
                method : "GET",
                headers : {'Accept' : 'application/json','Content-Type': 'text/plain','Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
                url : url,
                })
                .then(onSuccess, onFailure);

    },

		setFavouriteFilter: function (val){
			$rootScope.favouriteFilter=val;
		},
		setCategoryTitle: function (val){
			$rootScope.categoryTitle=val;

		},
    setCatId: function (val){
     sessionStorage.setItem("P_cat_id",val);
    },
    setCategoryIcon: function (val){
      $rootScope.categoryIcon=objtemplate.dat+'sideicons/'+val;

    },
    
	}

  return objtemplate;
});
