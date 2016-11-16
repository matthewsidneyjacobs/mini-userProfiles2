angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  // $scope.getUsers = function() {
  // 	$scope.users = mainService.getUsers();
  // }
//replacing old way with a promise


  $scope.currentPage = 1;

  $scope.getUsers = function() {
    mainService.getUsers($scope.currentPage).then(function(response) {
      $scope.users = response.data.data;
      $scope.totalPages = response.data.total_pages;
    })
  }

  $scope.getUsers();

  $scope.previous = function() {
    if($scope.currentPage > 1) {
      $scope.currentPage--;
      $scope.getUsers();
  }
  }

  $scope.next= function() {
    if ($scope.currentPage < $scope.totalPages) {
      $scope.currentPage++
      $scope.getUsers();
    }
  }

});
