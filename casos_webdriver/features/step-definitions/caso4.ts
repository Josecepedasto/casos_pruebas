import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given(/^I am on the login page$/, async () => {
  await browser.url("http://localhost:3000/iniciar-sesion");
  await browser.maximizeWindow();
  await browser.pause(1000);
});

When(/^I fill out the login form$/, async () => {
  await (await browser.$("[name='email']")).setValue("correo");
  await (await browser.$("[name='password']")).setValue("compic");
  await (await browser.$("//button[contains(text(), 'Login')]")).click();
  await browser.waitUntil(() => browser.getAlertText() !== null, { timeout: 16000 });
  await browser.acceptAlert();
});

Then(/^I click the "([^"]*)" button$/, async (buttonText: string) => {
  const xpath = `//button[contains(text(), '${buttonText}')]`;
  await (await browser.$(xpath)).click();
});
