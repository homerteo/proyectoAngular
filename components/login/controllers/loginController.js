(function () {
  var login = angular.module('peopleManager.login');
  login.controller('loginController', ['$scope',
                                          '$http',
                                          '$stateParams',
                                          'toaster',
                                          '$sessionStorage',
                                          '$localStorage',
  function ($scope, $http, $stateParams, toaster, $sessionStorage, $localStorage) {

    $scope.user = {};
  }]);
})();
