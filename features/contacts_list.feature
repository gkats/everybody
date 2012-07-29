@javascript
Feature: List contacts
  In order to keep track of my contacts
  As a user
  I want to view contacts and manage my contact collection

  Scenario: Empty contacts list
    Given I have 0 contacts
    When I go to the list of contacts
    Then I should see a contacts-empty message

  Scenario: Contacts List
    Given I have 2 contacts
    When I go to the list of contacts
    Then I should not see a contacts-empty message
    And there should be 2 contacts
    And I should see Edit/Delete links for each contact

  Scenario: Link to add new contact
    When I go to the list of contacts
    And I follow the Add new link
    Then I should see the new contact form

  Scenario: Ability to edit contact
    Given I have 1 contact
    When I go to the list of contacts
    And I follow the Edit link
    Then I should see the edit contact form
