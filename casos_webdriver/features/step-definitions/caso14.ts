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

When(/^I click the "Edit" button$/, async () => {
  await browser.waitUntil(
    async () => await browser.$("//button[contains(text(), 'Edit')]").isExisting(),
    { timeout: 5000, timeoutMsg: "Edit button not found" }
  );
  const editButton = await browser.$("//button[contains(text(), 'Edit')]");
  await editButton.click();
  await browser.pause(1000);
});

When(/^I update the user information$/, async () => {
  await browser.waitUntil(
    async () => await browser.$("#name").isExisting(),
    { timeout: 5000, timeoutMsg: "Name input not found" }
  );

  const nameInput = await browser.$("#name");
  const emailInput = await browser.$("#email");
  const passwordInput = await browser.$("#password");

  await nameInput.clearValue();
  await nameInput.setValue("Manuel");

  await emailInput.clearValue();
  await emailInput.setValue("admin3@gmail.com");

  await passwordInput.clearValue();
  await passwordInput.setValue("NewPassword123");

  await browser.pause(1000);
});

Then(/^I click the "Update" button$/, async () => {
  const updateButton = await browser.$("//button[contains(text(), 'Update')]");
  await updateButton.click();
  await browser.pause(1000);
});

