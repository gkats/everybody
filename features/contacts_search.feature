@javascript
Feature: Search contacts
  In order to be able to find a contact faster
  As a user
  I should be able to search my contacts

  Background:
    Given I have 1 contact with name 'Homer Simpson'
    And I have 1 contact with name 'Lisa Simpson'
    And I have 1 contact with name 'Ned Flanders'
    When I go to the list of contacts
    Then I should see 3 contacts

  Scenario: Search a contact
    When I search for 'Simpson'
    Then I should be at the list of contacts
    And I should see 2 contacts

    When I search for 's'
    Then I should be at the list of contacts
    And I should see 2 contacts
