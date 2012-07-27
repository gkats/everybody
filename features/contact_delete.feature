Feature: Delete contacts
  In order to get rid of unwanted contacts
  As a user
  I want to be able to delete contacts

  Scenario: Delete a contact
    When I have 2 contacts
    And I go to the list of contacts
    And I delete contact 1
    Then I should be at the list of contacts
    And I should see 1 contact