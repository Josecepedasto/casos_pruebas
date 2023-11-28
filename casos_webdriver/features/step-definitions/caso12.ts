import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given(/^I am on the admin login page$/, async () => {
  await browser.url("http://localhost:3000/inicio-sesion-admins");
  await browser.maximizeWindow();
  await browser.pause(1000);
});

When(/^I fill out the admin login form$/, async () => {
  await (await browser.$("[name='email']")).setValue("admin3@gmail.com");
  await (await browser.$("[name='password']")).setValue("Password123");
  await browser.pause(1000);
});

Then(/^I click the "Login" button$/, async () => {
  const loginButton = await browser.$("//button[contains(text(), 'Login')]");
  await loginButton.click();
  await browser.pause(1000);
});

Given(/^I am on the main page$/, async () => {
  await browser.url("http://localhost:3000/main");
  await browser.pause(1000);
});

When(/^I click the "New User" button$/, async () => {
  const newButton = await browser.$("//button[contains(text(), 'New User')]");
  await newButton.click();
  await browser.pause(1000);
});

When(/^I fill out the user creation form$/, async () => {
  const nameInput = await browser.$("#name");
  const emailInput = await browser.$("#email");
  const passwordInput = await browser.$("#password");

  await nameInput.setValue("New User Name2");
  await emailInput.setValue("newuser@gmail.com");
  await passwordInput.setValue("Newerd123");

  await browser.pause(1000);
});

Then(/^I click the "Create" button$/, async () => {
  const createUserButton = await browser.$("//button[contains(text(), 'Create')]");
  await createUserButton.click();
  await browser.pause(1000);
});
