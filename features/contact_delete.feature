@javascript
Feature: Delete contacts
  In order to get rid of unwanted contacts
  As a user
  I want to be able to delete contacts

  Scenario: Delete a contact
    When I have 2 contacts
    And I go to the list of contacts
    And I click Delete
    Then I should see the list of contacts
    And there should be 1 contact
    And I should see a success message
