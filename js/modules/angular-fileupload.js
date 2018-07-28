(function () {
	'use strict';
	angular
		.module('angular-file-upload', [])
		.directive('fileModel', [
			'$parse',
			fileUploadDirective
		]);

    if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {

      module.exports = "angular-file-upload";
    }
    function fileUploadDirective($parse) {
      return {
                 restrict: 'A',
                 link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;

                    element.bind('change', function(){
                       scope.$apply(function(){
                          modelSetter(scope, element[0].files[0]);
                       });
                    });
                 }
              };
            }
})();
