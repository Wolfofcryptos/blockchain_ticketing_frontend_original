/*
File Name : FileUpload.js
Absolute Path : js/services/FileUpload.js
Author : Flex , Emergining Technologies
Created Date : 08/Nov/2016
Functions :
*/

pulseapp.service('fileUpload', ['$http','$q', function ($http,$q) {
      
        this.uploadFileToUrl = function(file,method){
           var uploadUrl = "http://mobileserver.flextronics.com:3006/"+method;
           var deferred = $q.defer();
           var fd = new FormData();
           fd.append('file', file);

          $http.post(uploadUrl, fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
           })
           .success(function(response){
            deferred.resolve(response);
           })
           .error(deferred.reject);

           return deferred.promise;
        }
     }]);
