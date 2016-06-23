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

    $scope.login = function(){
      $scope.isEnrolled = false
      console.log($scope.user.email)
      console.log($scope.user.password)
      if($scope.user && $scope.user.email && scope.user.password){
        $scope.isEnrolled = userIsEnrolled()
      }
      if($scope.isEnroled){
        $sessionStorage.currentUser = $scope.user
        toaster.success('Login successfull !')
        $state.go('people')
      }else{
        toater.error('User does not exist. Please check email/password')
      }
    };

    $scope.signIn = function(){
      $state.go('newaccount')
    };

    // Funcion privada, no accesible mediante el scope desde la vista.
  function userIsEnrolled() {
    var enrolled = false
    $scope.users = $localStorage.users
    for(var i = 0; i < $scope.users.length; i++) {
      if(($scope.users[i].email === $scope.user.email) &&
          ($scope.users[i].password === $scope.user.password)){
        enrolled = true
        $scope.user = $scope.users[i]
        break;
      }
    }
    return enrolled
  };
  }]);
})();
