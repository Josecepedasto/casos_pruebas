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
  await browser.pause(1000);
});

Then(/^I click the "([^"]*)" button$/, async (buttonText: string) => {
  const xpath = `//button[contains(text(), '${buttonText}')]`;
  await (await browser.$(xpath)).click();
  await browser.pause(1000);
});

Given(/^I am on the main page$/, async () => {
  await browser.url("http://localhost:3000/main");
  await browser.pause(1000);
});

When(/^I click the "Crear Publicación" button$/, async () => {
  const crearPublicacionButton = await browser.$("//button[contains(text(), 'Crear Publicación')]");
  await crearPublicacionButton.click();
  await browser.pause(1000);
});

When(/^I fill out the publication form$/, async () => {
  await (await browser.$("#titulo")).setValue("Repartido");
  await (await browser.$("#imagen")).setValue("C:\Users\mmera\OneDrive\Escritorio\Casos nuevos michel\webdriverio-cucumber\ofrecerofertas.png");
  await (await browser.$("#descripcion")).setValue("se solicita repartidor de volantes");
  await browser.pause(1000);
});

Then(/^I click the "Crear Publicacion" button$/, async () => {
  const crearPublicacionFinalButton = await browser.$("//button[contains(text(), 'Crear Publicacion')]");
  await crearPublicacionFinalButton.click();
  await browser.pause(1000);
});
