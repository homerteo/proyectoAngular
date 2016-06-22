(function () {
  var myModule = angular.module('myModule');
  myModule.service('myService', ['$rootScope',
                                 '$http',
                                 '$stateParams',
								 function ($rootScope, $http, $stateParams) {

    var urlBase = 'http://url.to.api';
    var myService = {};

    myService.getById = function (Id) {
      return $http.get(urlBase + '/element/Id' + Id);
    };

    myService.delete = function (Id) {
      return $http.delete(urlBase + '/element/' + Id);
    };

    myService.update = function (element) {
      return $http.put(urlBase + '/element/' + element.Id, element)
    };

    myService.save = function (element) {
      return $http.post(urlBase + '/element', element);
    }

    myService.getAll = function () {
      return $http.get(urlBase + '/element');
    }

    return myService;
  }]);
})();
