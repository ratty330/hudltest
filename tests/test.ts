import { test, expect, } from '@playwright/test';

test('homepage has a login button that can be clicked', async ({ page }) => {
  //locators needed for the test
  const loginButton = page.locator('text=Log in');

  await page.goto('https://www.hudl.com/');
  await expect(loginButton).toContainText('Log in');
  await (loginButton).click();
  await expect(page).toHaveURL(/login/);
});


test('Users with a username and password can use the login system to login', async ({ page }) => {
  //locators needed for the test

  const loginButton = page.locator('text=Log in');
  const emailField = page.locator('id=email');
  const passwordField = page.locator('id=password');
  const submitLogin = page.locator('id=logIn');

  await page.goto('https://www.hudl.com/');
  await expect(loginButton).toContainText('Log in');
  await (loginButton).click();
  await expect(page).toHaveURL(/login/);
  await (emailField).fill('***');
  await (passwordField).fill('***')
  await (submitLogin).click();
  await expect(page).toHaveURL(/home/);
});

test('login system needs username and password', async ({ page }) => {
  //locators needed for the test

  // homepage log in button
  const loginButton = page.locator('text=Log in');
  // email text field for login page
  const emailField = page.locator('id=email');
  // password text field for login page
  const passwordField = page.locator('id=password');
  // log in button for login page
  const submitLogin = page.locator('id=logIn');
  // error text for login button
  const errorText = page.locator('.uni-text');
  await page.goto('https://www.hudl.com/');
  await expect(loginButton).toContainText('Log in');
  await (loginButton).click();
  await expect(page).toHaveURL(/login/);
  await (submitLogin).click();
  await expect(errorText).toContainText('We didn\'t recognize that email and/or password.Need help?')
  await (emailField).fill('*****');
  await (submitLogin).click();
  await expect(errorText).toContainText('We didn\'t recognize that email and/or password.Need help?')
  await (passwordField).fill('*****')
  await (submitLogin).click();
  await expect(page).toHaveURL(/home/);
});

test('need help buttons works', async ({ page }) => {
  //locators needed for the test
  const loginButton = page.locator('text=Log in');
  const forgottonPassword = page.locator('text=Need help')
  const backButton = page.locator('text=Back')

  await page.goto('https://www.hudl.com/');
  await (loginButton).click();
  await (forgottonPassword).click()
  await expect(page).toHaveURL(/help/);
  await (backButton).click();
  await expect(page).toHaveURL(/login/);
});


//fom here i would add in a test for reset pasword and a log in with organination