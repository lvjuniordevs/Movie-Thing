"use strict";

var angular = require('angular');
var control = require('./control.js');



angular.module('myApp').controller('dashboardController',['$scope','$http',control]);


