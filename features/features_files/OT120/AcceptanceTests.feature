Feature: AcceptanceTests


  Scenario: AcceptanceTests
    Given user log in AWS
    When trigger a event
    Then receives five email
