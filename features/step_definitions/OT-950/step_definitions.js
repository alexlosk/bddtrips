const { Given, Then, When, Before, After } = require("cucumber");

    Before(function () {
        actionwords = Object.create(require('../../../support/actionwords.js').Actionwords);
    });

    After(function () {
        actionwords = null;
    });


    Given("user log in AWS", function () {
        actionwords.userLogInAWS();
    });

    When(/^trigger a event$/, function (callback) {
        actionwords.triggerAEvent();
        callback();
    });

    Then(/^receives five email$/, function (callback) {
        actionwords.receivesTwoEmail();
        callback();
    });

    Given(/^a bank account$/, function (callback) {
        actionwords.aBankAccount();
        callback();
    });

    When(/^user cheks his number$/, function (callback) {
        actionwords.userCheksHisNumber();
        callback();
    });

    Then(/^number has 20 chars$/, function (callback) {
        actionwords.numberHas20Chars();
        callback();
    });

    Given(/^user trigger a sales order requested event$/, function (callback) {
        actionwords.userTriggerASalesOrderRequestedEvent();
        callback();
    });

    When(/^user verify his inbox$/, function (callback) {
        actionwords.userVerifyHisInbox();
        callback();
    });

    Then(/^sales order is correctly sent$/, function (callback) {
        actionwords.salesOrderIsCorrectlySent();
        callback();
    });

