@javascript
Feature: Filter contacts
  In order to view only a subset of relevant contacts
  As a user
  I should be able to filter contacts

  Background:
    Given The following contacts exist:
    | Name          | Group    |
    | Homer Simpson | family   |
    | Lisa Simpson  | family   |
    | Ned Flanders  | neighbor |
    And I go to the list of contacts
    Then there should be 3 contacts

  Scenario: Filter contacts
    When I filter by
    | group  |
    | family |
    Then I should see the list of contacts
    And there should be 2 contacts
    When I filter by
    | group |
    | all   |
    Then I should see the list of contacts
    And there should be 3 contacts
