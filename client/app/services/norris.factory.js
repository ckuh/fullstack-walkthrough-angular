(function () {
  'use strict';

  angular
    .module('app')
    .factory('NorrisFactory', NorrisFactory);
  
  function NorrisFactory ($http) {
    const service = {
      getJokes: getJokes
    };
    return service;

    function getJokes (num) {

      const params = { numJokes: num};
      const config = { params: params};
      
      return $http.get('/api/jokes', config);
      
    }
  }

})();
