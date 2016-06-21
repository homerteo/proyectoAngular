// Archivo principal de aplicación AngularJS
(function () {
  // Carga de Módulos
  var mainApp = angular.module('peopleManager', ['ui.router',
                                                 'ui.gravatar',
                                                 'ui.bootstrap',
                                                 'ngStorage',
                                                 'toaster',
                                                 'peopleManager.person',
                                                 'peopleManager.login',
                                                 'peopleManager.error']);

  // Ruta por default
  mainApp.run(['$state', function ($state) {
     $state.transitionTo('login');
  }]);
  // Configuración de routing interno
  // UI-Route
  mainApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('login', {
              url: '/login',
              templateUrl: '/login/views/login.html',
              controller: 'loginController'
          })
          .state('newaccount', {
              url: '/login/new',
              templateUrl: '/login/views/newAccount.html',
              controller: 'loginController'
          })
          .state('newperson', {
              url: '/people/new',
              templateUrl: '/person/views/newPerson.html',
              controller: 'personController'
          })
          .state('listpeople', {
              url: '/people',
              templateUrl: '/person/views/personList.html',
              controller: 'personController'
          })
          .state('editperson', {
            url: '/people/:id/edit',
              templateUrl: '/person/views/editPerson.html',
              controller: 'personController'
          })
          .state('personprofile', {
            url: '/people/:id',
              templateUrl: '/person/views/showPerson.html',
              controller: 'personController'
          })
          .state('error', {
            url: '/error',
              templateUrl: '/error/views/error.html',
              controller: 'errorController'
          })
        $urlRouterProvider.otherwise('login');
    }]);
})();
