const { Given, Then, When, Before } = require("cucumber");
const assert = require("assert");
const AWS = require("aws-sdk");
const sns = require("../../../support/sns-publish-message.js");
var world = require("../../../support/world.js");




// Synchronous
Given("there is a helloWorld event created with the {string} message", function (test) {
    world.snsMessage = test;
});

Given(/^a user is logged in AWS$/,  function () {
//Checking that I am getting credentials successfully from AWS
});

When(/^the helloWorld event is triggered$/, function () {
  //publish the message to sns
});

Then(/^an email should be sent$/, function () {
  // Write code here that turns the phrase above into concrete actions
  //callback(null, 'pending');
});
