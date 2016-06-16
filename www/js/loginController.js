angular
  .module('sommbuddy').controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('main');
            $scope.data = {};
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Failed',
                template: 'Your username or password is incorrect.'
            });
        });
    }
})
