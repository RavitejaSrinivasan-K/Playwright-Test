import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page.locator('#loginusername').click();
  await expect(page.getByRole('img', { name: 'First slide' })).toBeVisible();

  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('R');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Raviteja18');
  await expect(page.getByRole('img', { name: 'Third slide' })).toBeVisible();

  await page.locator('#loginpassword').click();
  await expect(page.getByRole('img', { name: 'First slide' })).toBeVisible();

  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('T');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('Trend@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.locator('#tbodyid').click();
  await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();

  await page.locator('#tbodyid').click();
});


/**
 * npx playwright --help
 * npx playwright test --help
 * npx playwright codegen --help
 * 
 * //file create
 * npx playwright codegen --output (or) -o tests/fileName.spec.js
 * 
 * //device
 * npx playwright codegen --device "iPhone 12"
 * 
 * //viewport 
 * npx playwright codegen --viewport-size="720,480"
 * 
 * //language changing
 * npx playwright codegen --target=java
 * 
 * 
 */






