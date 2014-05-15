angular.module('demo.handler', [])
  .provider('DemoHandler', function () {
    var currentDemoFile;
    return {
      setCurrent: function (filename) {
        currentDemoFile = filename;
      },
      $get: function (demos, $location, demoCurrentFallback) {
        if (!currentDemoFile) currentDemoFile = demoCurrentFallback;
        
        var currIndex = _.findIndex(demos, {href: currentDemoFile}),
            current = demos[currIndex] || demos[0],
            back = demos[currIndex-1] || demos[0],
            next = demos[currIndex+1] || demos[0];
            
        return {
          urls: {
            index: 'index.html',
            backDemo: back && back.href,
            nextDemo: next && next.href
          },
          current: current,
          getDemos: function () {
            return demos;
          }
        }
      }
    };
  })
  .factory('demoCurrentFallback', function ($location) {
    var url = $location.absUrl(),
        lastSlash = url.lastIndexOf('/');

    return decodeURI(url.substring(lastSlash+1));
  })
  .service('demos', function (DemoFactory) {
    return [
      DemoFactory('-Dessert.html'),
      DemoFactory('-Scopes.html'),
      DemoFactory('-Scopes Inheritence.html'),
      DemoFactory('-Angular Expressions.html'),
      DemoFactory('-Directives.html')
    ];
  })
  .service('DemoFactory', function () {
    return function(filename) {
      return {
        href: filename,
        name: filename
          .substring(1)
          .replace('.html', '')
      }
    }
  })
  .controller('DemoHeaderCtrl', function ($scope, DemoHandler) {
    $scope.urls = DemoHandler.urls;
    $scope.current = DemoHandler.current;
  })
  
  