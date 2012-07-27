Feature: List contacts
  In order to keep track of my contacts
  As a user
  I want to view contacts and manage my contact collection

  Scenario: Empty contacts list
    Given I have 0 contacts
    When I go to the list of contacts
    Then I should see an empty message

  Scenario: Contacts List
    Given I have 2 contacts
    When I go to the list of contacts
    Then there should be 2 contacts
    And I should see edit/delete buttons for each contact

  Scenario: Link to add new contact
    When I go to the list of contacts
    And I follow the add new button
    Then I should see a new contact form