import { Given, Then, When } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";

Given(/^I am on the homepage$/, async () => {
  await browser.url("http://localhost:3000/");
  await browser.maximizeWindow();
  await browser.pause(1000);
});

When(/^I click the "Contact Us" link$/, async () => {
  const contactUsLink = await browser.$("=Contactenos");
  await contactUsLink.click();
});

Then(/^I handle any alert$/, async () => {
  await browser.acceptAlert();
});

