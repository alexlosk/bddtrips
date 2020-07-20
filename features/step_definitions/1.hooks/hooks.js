const {  Before,After,BeforeAll,AfterAll } = require("cucumber");
const awsparams = require('../../../awsparameters.js');
const AWS = require("aws-sdk");
var world = require("../../../support/world.js");

//Hooks section
Before({tags: "@testExample"}, function () {
    console.log("This is before1")
  });
  
After({tags: "@testExample2"}, function () {
    console.log("This is after2")
  });

BeforeAll({tags: "@testExample"}, function () {

  console.log("This is beforeAll1")

  //Check that there wasn't an open instance already running. We cannot create temporary credential for each feature file.
  if (world.awslogged == false){
      AWS.config.credentials = new AWS.ChainableTemporaryCredentials({
        params: { RoleArn: awsparams.ROLE_ARN },
      });
      world.awslogged = true;
    }
  });
  
AfterAll({tags: "@testExample2"}, function () {
    console.log("This is afterAll2")
  });