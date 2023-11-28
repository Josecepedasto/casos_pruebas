Feature: Admin Login and Delete Publication

Scenario: Admin login and delete a publication
  Given I am on the admin login page
  When I fill out the admin login form
  Then I click the "Login" button
  Given I am on the main page
  When I click the "Delete" button
