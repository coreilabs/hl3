'use strict';

/**
 * @ngdoc function
 * @name hl2App.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the hl2App
 */
angular.module('hl2App')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
