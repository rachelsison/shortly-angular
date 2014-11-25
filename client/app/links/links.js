angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  // $scope.data = {};
  // $scope.getLinks = function(){};
  angular.extend($scope, Links);
});

