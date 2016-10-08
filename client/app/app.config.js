(function () {
  'use strict';

  angular
    .module('app')
    .config(config)
    
    function config ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('dashboard');
      
      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/app/dashboard/dashboard.html',
            controller: 'DashboardCtrl as vm'
        })
    }

})();