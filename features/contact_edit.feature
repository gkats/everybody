@javascript
Feature: Edit contacts
  In order to make changes to my contacts' data
  As a user
  I want to be able to edit a contact

  Background:
    Given I have 1 contact
    And I go to the edit contact page for contact 1

  Scenario: Edit contact
    When I fill in
    | Name          |
    | Homer Simpson |
    And I click Save
    Then I should see the list of contacts
    And I should see a success message
    And page should have content Homer Simpson

  Scenario: Fail to edit contact
    When I fill in
    | Name          |
    |               |
    And I click Save
    Then I should see the contact form
    And I should see an error message

  Scenario: Cancel contact editing
    When I fill in
    | Name          |
    | Homer Simpson |
    And I click Cancel
    Then I should see the list of contacts
    And page should not have content Homer Simpson
