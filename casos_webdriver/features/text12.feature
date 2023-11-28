Feature: Admin Login and Create User

Scenario: Admin login and create a new user
  Given I am on the admin login page
  When I fill out the admin login form
  Then I click the "Login" button
  Given I am on the main page
  When I click the "New User" button
  And I fill out the user creation form
  Then I click the "Create" button
