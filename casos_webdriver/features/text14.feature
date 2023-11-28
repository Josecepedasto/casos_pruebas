Feature: Admin Login, Edit, and Update User Information

Scenario: Admin login, edit, and update user information
  Given I am on the admin login page
  When I fill out the admin login form
  Then I click the "Login" button
  Given I am on the main page
  When I click the "Edit" button
  When I update the user information
  Then I click the "Update" button
