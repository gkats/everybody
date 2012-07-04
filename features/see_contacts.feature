Feature: See contacts
  In order to keep track of contacts
  As a user
  I want to view contacts
  
  Scenario: Contacts List
    Given I have 2 contacts
    When I go to the list of contacts
    Then there should be 2 contacts
  
