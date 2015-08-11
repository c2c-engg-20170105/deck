'use strict';

let angular = require('angular');

require('./loadBalancerPod.html');

module.exports = angular.module('spinnaker.loadBalancer.pod', [])
  .directive('loadBalancerPod', function() {
    return {
      restrict: 'E',
      scope: {
        grouping: '=',
        application: '=',
        parentHeading: '=',
      },
      templateUrl: require('./loadBalancerPod.html'),
    };
  }).name;
