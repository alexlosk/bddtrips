module.exports = function () {
    this.Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^user log in AWS$/, function (callback) {
        this.actionwords.userLogInAWS();
        callback();
    });

    this.When(/^trigger a event$/, function (callback) {
        this.actionwords.triggerAEvent();
        callback();
    });

    this.Then(/^receives two email$/, function (callback) {
        this.actionwords.receivesTwoEmail();
        callback();
    });

    this.Given(/^a bank account$/, function (callback) {
        this.actionwords.aBankAccount();
        callback();
    });

    this.When(/^user cheks his number$/, function (callback) {
        this.actionwords.userCheksHisNumber();
        callback();
    });

    this.Then(/^number has 20 chars$/, function (callback) {
        this.actionwords.numberHas20Chars();
        callback();
    });

    this.Given(/^user trigger a sales order requested event$/, function (callback) {
        this.actionwords.userTriggerASalesOrderRequestedEvent();
        callback();
    });

    this.When(/^user verify his inbox$/, function (callback) {
        this.actionwords.userVerifyHisInbox();
        callback();
    });

    this.Then(/^sales order is correctly sent$/, function (callback) {
        this.actionwords.salesOrderIsCorrectlySent();
        callback();
    });
}
