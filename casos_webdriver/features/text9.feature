Feature: Admin Login and Create Publication

Scenario: Admin login and create publication
  Given I am on the login page
  When I fill out the login form
  Then I click the "Login" button
  Given I am on the main page
  When I click the "Crear Publicación" button
  And I fill out the publication form
  Then I click the "Crear Publicacion" button
