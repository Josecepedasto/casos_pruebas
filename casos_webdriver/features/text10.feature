Feature: Admin Login and Update Publication

Scenario: Admin login, create, and update publication
  Given I am on the login page
  When I fill out the login form
  Then I click the "Login" button
  Given I am on the main page
  When I click the "Crear Publicación" button
  Then I click the "Actualizar Publicación" button
  When I fill out the publication update form
  Then I click the "Actualizar" button
