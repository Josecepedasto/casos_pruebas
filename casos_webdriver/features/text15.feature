Feature: Admin Login and Return to Homepage

Scenario: Admin login and return to homepage
  Given I am on the admin login page
  When I fill out the admin login form
  Then I click the "Login" button
  Then I return to the homepage
