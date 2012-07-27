Feature: Add contacts
  In order to store all my contacts
  As a user
  I want to be able to add a contact

  Background:
    Given I have 0 contacts
    And I go to the new contact page

  Scenario: Add new contact
    When I fill in the new contact form with a valid contact
    And save my changes
    Then I should be at the list of contacts
    And there should be 1 contact
    And there should be a success message

  Scenario: Fail to add contact
    When I fill in the new contact form with an invalid contact
    And save my changes
    Then I should be at the new contact page
    And I should see an error message

  Scenario: Canceling new contact
    When I fill in the new contact form with a valid contact
    And cancel my changes
    Then I should be at the list of contacts
    And there should be 0 contacts
    And there should be a no contacts message
