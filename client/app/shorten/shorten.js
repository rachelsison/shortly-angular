angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links)
{
  $scope.link = {};
  $scope.addLink = function(link){
    var data = $scope.link;
    $scope.link.url = link;
    return $http({
      method: 'POST',
      url: '/api/links',
      data: data
    })
    .then(function(response){
      $location.path('/links')
      var shortCode = response.data.code;
      Links.getShortLink(shortCode)
    })
  };
 })



