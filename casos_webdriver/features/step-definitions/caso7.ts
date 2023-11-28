import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given(/^I am on the registration page$/, async () => {
  await browser.url("http://localhost:3000/registro-admins");
  await browser.maximizeWindow();
  await browser.pause(1000);
});

When(/^I fill out the registration form$/, async () => {
  await (await browser.$("[name='name']")).setValue("cepeda");
  await (await browser.$("[name='email']")).setValue("admin3@");
  await (await browser.$("[name='password']")).setValue("Pas123");
  await browser.pause(1000);
});

Then(/^I click the "([^"]*)" button$/, async (buttonText: string) => {
  const xpath = `//button[contains(text(), '${buttonText}')]`;
  await (await browser.$(xpath)).click();
  await browser.pause(1000);
});
