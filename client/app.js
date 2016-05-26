var myApp = angular.module('mtgMana', ['ui.router']);
myApp.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url:'/home',
      templateurl: 'index.html'
    })
});