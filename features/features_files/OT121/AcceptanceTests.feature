Feature: AcceptanceTests


  Scenario: CheckBankID
    Given a bank account
    When user cheks his number
    Then number has 20 chars
