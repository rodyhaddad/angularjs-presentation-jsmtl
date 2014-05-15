// Just for presentation
angular.module('app', ['rh.user'])
  .controller('ProfileCtrl', function ($scope, User){
    $scope.profile = User.profile;
  });
  
  
angular.module('rh.user', [])
  .service('User', function ($http) {
    // ...
    return {
      profile: profile
    };
  });
  





















// # Injection syntax

var app = angular.module('app', []);

// 1
app.service('name', function ($rootScope, $http, $timeout) {
  
});



















// 2
app.service('name', ['$http', '$rootScope', '$timeout', 
  function ($http, $rootScope, $timeout) {
  
}]);



















// 3
function name($http, $rootScope, $timeout) {
  
}
name.$inject = ['$http', '$rootScope', '$timeout'];
app.service('name', name);




















// # The API

angular.module('dummy', [/*deps*/])
  .constant('name', 'value')
  
  .service('name', function (/*injections*/) {
    this.method = method;
  })
  .factory('name', function (/*injections*/) {
    return {
      method: method
    };
  })
  .value('name', 'value')
  
  .controller('name', function (name/*, injections*/) {
    
  })
  
  .filter('name', function (/*injections*/) {
    return function (text) {
      // return mod_text
    };
  })
  
  .directive('name', function (/*injections*/) {
    return {
      link: link
    };
  })
  
  .animation('name', function (/*injections*/) {
    return {/*...*/};
  })
  
angular.module('dummy')
  .config(function (/*...*/) {
    
  })
  .run(function (/*injections*/) {
    
  })
  .provider('name', function (/*...*/) {
    return {
      $get: function (/*injections*/) {
        
      }
    };
  })
  
  