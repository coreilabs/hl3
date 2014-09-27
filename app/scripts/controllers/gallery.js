'use strict';

/**
 * @ngdoc function
 * @name hl2App.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the hl2App
 */
angular.module('hl2App')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
