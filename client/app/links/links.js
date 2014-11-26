angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {

  angular.extend($scope, Links);
  $scope.getLinks();
  console.log($location)
});

