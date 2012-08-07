@javascript
Feature: Filter contacts
  In order to view only a subset of relevant contacts
  As a user
  I should be able to filter contacts

  Background:
    When I have 1 contact with name 'Homer Simpson' and group 'family'
    And I have 1 contact with name 'Lisa Simpson' and group 'family'
    And I have 1 contact with name 'Ned Flanders' and group 'neighbor'
    And I go to the list of contacts
    Then I should see 3 contacts

  Scenario: Filter contacts
    When I select 'family' as a filter
    Then I should be at the list of contacts
    And I should see 2 contacts
    When I select 'all' as a filter
    Then I should be at the list of contacts
    And I should see 3 contacts
