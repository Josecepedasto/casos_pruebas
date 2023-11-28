Feature: Admin Login and Delete Publication

Scenario: Admin login, create, and delete publication
  Given I am on the login page
  When I fill out the login form
  Then I click the "Login" button
  Given I am on the main page
  When I click the "Crear Publicación" button
  Then I click the "Eliminar" button
