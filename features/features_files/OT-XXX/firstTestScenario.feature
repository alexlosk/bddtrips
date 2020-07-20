Feature: Topic AWS

  This test will trigger a topic in AWS and we will get an email
@testExample
 Scenario Outline: Test sending a message to an SNS topic in AWS
    Given there is a helloWorld event created with the <snsMessage> message 
    And  a user is logged in AWS
    When the helloWorld event is triggered
    Then an email should be sent
Examples:
|snsMessage|
|"Hello World"|
