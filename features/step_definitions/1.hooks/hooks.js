const {  Before,After,BeforeAll,AfterAll } = require("cucumber");
const awsparams = require('../../../awsparameters.js');
const AWS = require("aws-sdk");
var world = require("../../../support/world.js");

//Hooks section
Before({tags: "@testExample"}, function () {
  });
  
After({tags: "@testExample2"}, function () {
  });

BeforeAll({tags: "@testExample"}, function () {
  });
  
AfterAll({tags: "@testExample2"}, function () {
  });