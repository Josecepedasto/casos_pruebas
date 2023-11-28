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

When(/^I click the "Delete" button$/, async () => {
  await browser.waitUntil(
    async () => await browser.$("//button[contains(text(), 'Delete')]").isExisting(),
    { timeout: 5000, timeoutMsg: "Delete button not found" }
  );
  const deleteButton = await browser.$("//button[contains(text(), 'Delete')]");
  await deleteButton.click();
  await browser.pause(1000);
});
