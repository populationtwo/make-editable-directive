angular.module( 'makeEditableApp', [] )
	.directive( 'makeEditable', function () {
		return {
			restrict   : 'A',
			templateUrl: 'makeEditableTemplate.html',
			transclude : true,
			scope      : true,
			link       : function (scope, attrs, element) {
				scope.isEditable = false;

				scope.edit = function () {
					if (scope.isEditable == false) {
						scope.isEditable = true;
					} else {
						scope.isEditable = false;
					}

				}
			}
		}
	} )