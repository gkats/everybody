Feature: Edit contacts
  In order to make changes to my contacts' data
  As a user
  I want to be able to edit a contact

  Background:
    Given I have 1 contact with name 'John Doe'
    And I go to the edit contact page

  Scenario: Edit contact
    When I change the contact's name to 'Homer Simpson'
    And I save my changes
    Then I should go to the list of contacts
    And I should see a success message
    And I should see Homer Simpson

  Scenario: Fail to edit contact
    When I change the contact's name to ''
    And I save my changes
    Then I should be at the edit contact page
    And I should see an error message
    And contact's name should not be empty

  Scenario: Cancel contact editing
    When I change the contact's name to 'Homer Simpson'
    And I cancel my changes
    Then I should go to the list of contacts
    And I should not see Homer Simpson
