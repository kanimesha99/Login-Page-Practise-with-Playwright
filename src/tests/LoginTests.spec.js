import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import dotenv from "dotenv";
dotenv.config();

test.describe("Test Script for the Login Page", () => {
  let Login;

  test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page);
    await Login.gotoLoginPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("TC_001 - Successful login as admin", async ({ page }) => {
    await Login.enterUsername(process.env.name);
    await Login.enterPassword(process.env.Password);
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await page.waitForTimeout(5000);
    await expect(Login.home_text).toBeVisible();
  });

  test("TC_002 - Login with incorrect username", async ({ page }) => {
    await Login.enterUsername("rahulshetty123");
    await Login.enterPassword(process.env.Password);
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_003 - Login with empty username", async ({ page }) => {
    await Login.enterUsername("");
    await Login.enterPassword(process.env.Password);
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsEmpty).toBeVisible();
  });

  test("TC_004 - Login with uppercase username", async ({ page }) => {
    await Login.enterUsername("RAHULSHETTYACADEMY");
    await Login.enterPassword(process.env.Password);
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_005 - Login with empty password", async ({ page }) => {
    await Login.enterUsername(process.env.name);
    await Login.enterPassword("");
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsEmpty).toBeVisible();
  });

  test("TC_006 - Login with incorrect password", async ({ page }) => {
    await Login.enterUsername(process.env.name);
    await Login.enterPassword("learning123");
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_007 - Login with incorrect username and password", async ({
    page,
  }) => {
    await Login.enterUsername("rahulshetty123");
    await Login.enterPassword("learning123");
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_008 - Login with empty username and password", async ({ page }) => {
    await Login.enterUsername("");
    await Login.enterPassword("");
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsEmpty).toBeVisible();
  });

  test("TC_009 - Successful login as user", async ({ page }) => {
    await Login.enterUsername(process.env.name);
    await Login.enterPassword(process.env.Password);
    await Login.pickRoleAsUser();
    await Login.acceptUserAlert();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await page.waitForTimeout(5000);
    await expect(Login.home_text).toBeVisible();
  });

  test("TC_010 - Login without agreeing to terms", async ({ page }) => {
    await Login.enterUsername(process.env.name);
    await Login.enterPassword(process.env.Password);
    await Login.pickRoleAsAdmin();
    await Login.clickOnsubmit();
    await page.waitForTimeout(5000);
    await expect(Login.home_text).not.toBeAttached();
  });
});
