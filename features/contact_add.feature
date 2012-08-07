@javascript
Feature: Add contacts
  In order to store all my contacts
  As a user
  I want to be able to add a contact

  Background:
    Given I have 0 contacts
    And I go to the new contact page

  Scenario: Add new contact
    When I fill in
    | Name          | Group  | Address               | Notes |
    | Homer Simpson | family | 742 Evergreen Terrace |       |
    And I click Save
    Then I should see the list of contacts
    And there should be 1 contact
    And I should see a success message

  Scenario: Fail to add contact
    When I fill in
    | Name | Group  | Address               | Notes |
    |      | family | 742 Evergreen Terrace |       |
    And I click Save
    Then I should see the new contact form
    And I should see an error message

  Scenario: Canceling new contact
    When I fill in
    | Name          | Group  | Address               | Notes |
    | Homer Simpson | family | 742 Evergreen Terrace |       |
    And I click Cancel
    Then I should see the list of contacts
    And there should be 0 contacts
    And I should see a contacts-empty message
