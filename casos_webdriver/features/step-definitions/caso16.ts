import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given(/^I am on the login page$/, async () => {
  await browser.url("http://localhost:3000/iniciar-sesion");
  await browser.maximizeWindow();
  await browser.pause(1000);
});

When(/^I fill out the login form$/, async () => {
  await (await browser.$("[name='email']")).setValue("correo7@example.com");
  await (await browser.$("[name='password']")).setValue("Chocos716");
  await (await browser.$("//button[contains(text(), 'Login')]")).click();
});

Then(/^I handle the alert$/, async () => {
  await browser.acceptAlert();
});

Then(/^I click the "More Information" button$/, async () => {
  await browser.pause(1000);
  await (await browser.$("//button[contains(text(), '¡Mas informacion!')]")).click();
});

