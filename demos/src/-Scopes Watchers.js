// Just for presentation
$scope.expression = 1;

function log(value) {
  console.log(value);
}

$scope.$apply(function () {
  $scope.$watch('expression', log);
});

$scope.$apply(function () {
  $scope.expression++;
});

$scope.$apply(function () {
  $scope.expression++;
});