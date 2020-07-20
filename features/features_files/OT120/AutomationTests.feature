Feature: AutomationTests


  Scenario: Salesorderrequested event is correctly created
    Given user trigger a sales order requested event
    When user verify his inbox
    Then sales order is correctly sent
