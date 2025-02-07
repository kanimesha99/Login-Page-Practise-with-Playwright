import { test, expect } from '@playwright/test';

test('TC_001', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('link', { name: 'ProtoCommerce Home' })).toBeVisible();
  await page.close();
});

test('TC_002', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshetty123');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Incorrect username/password.')).toBeVisible();
  await page.close();
});

test('TC_003', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Empty username/password.')).toBeVisible();
  await page.close();
});

test('TC_004', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('RAHULSHETTYACADEMY');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Incorrect username/password.')).toBeVisible();
  await page.close();
});

test('TC_005', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Empty username/password.')).toBeVisible();
  await page.close();
});

test('TC_006', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning123');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Incorrect username/password.')).toBeVisible();
  await page.close();
});

test('TC_007', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshetty123');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning123');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Incorrect username/password.')).toBeVisible();
  await page.close();
});

test('TC_008', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Empty username/password.')).toBeVisible();
  await page.close();
});

test('TC_009', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.locator('label:nth-child(2) > .checkmark').click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('link', { name: 'ProtoCommerce Home' })).toBeVisible();
  await page.close();
});

test('TC_010', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.close();
});


test('TC_011', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
  await page.locator('label').filter({ hasText: 'Admin' }).locator('span').nth(1).click();
  await page.getByRole('combobox').selectOption('teach');
  await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('link', { name: 'ProtoCommerce Home' })).toBeVisible();
  await page.close();
});