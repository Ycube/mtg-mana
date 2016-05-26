var myApp = angular.module('mtgMana', ['ui.router']);

myApp.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/home',
      templateurl: 'index.html'
    })
});

myApp.controller('manaController',[ '$scope', ($scope) => {
  
  $scope.manaType = [
    {'color': 'white', 'value': 0}, 
    {'color': 'blue', 'value': 0}, 
    {'color': 'black', 'value': 0}, 
    {'color': 'red', 'value': 0}, 
    {'color': 'green', 'value': 0}];
  
  $scope.update = (index) => {

  };

  // $scope.removeMana = (index) => {
  //   if($scope.manaType.value > 0) {
  //     $scope.manaType.value--;
  //   }
  // }

}]);

