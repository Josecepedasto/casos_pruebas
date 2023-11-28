Feature: User Login and More Information

Scenario: User login and view more information
  Given I am on the login page
  When I fill out the login form
  Then I handle the alert
  Then I click the "More Information" button
