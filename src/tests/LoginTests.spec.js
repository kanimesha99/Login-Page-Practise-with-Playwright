import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Test Script for the Login Page",()=>{

  let Login;

  test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page);    
    await Login.gotoLoginPage();     
  });

  test.afterEach(async ({page}) => {
    await page.close();  
  });

  test("TC_001", async ({ page }) => {
    // Login = new LoginPage(page)
    // await Login.gotoLoginPage();
    await Login.enterUsername('rahulshettyacademy');
    await Login.enterPassword('learning');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.home_text).toBeVisible();
  });
  
  test("TC_002", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('rahulshetty123');
    await Login.enterPassword('learning');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_003", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('');
    await Login.enterPassword('learning');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsEmpty).toBeVisible();
  });
  
  test("TC_004", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('RAHULSHETTYACADEMY');
    await Login.enterPassword('learning');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_005", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('rahulshettyacademy');
    await Login.enterPassword('');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsEmpty).toBeVisible();
  });

  test("TC_006", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('rahulshettyacademy');
    await Login.enterPassword('learning123');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_007", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('rahulshetty123');
    await Login.enterPassword('learning123');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsIncorrect).toBeVisible();
  });

  test("TC_008", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('');
    await Login.enterPassword('');
    await Login.pickRoleAsAdmin();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.errorMessageWhenCredentialsEmpty).toBeVisible();
  });

  test("TC_009", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('rahulshettyacademy');
    await Login.enterPassword('learning');
    await Login.pickRoleAsUser();
    await Login.acceptUserAlert();
    await Login.selectAgreeButton();
    await Login.clickOnsubmit();
    await expect(Login.home_text).toBeVisible();
  });

  test("TC_010", async ({ page }) => {
    // Login = new LoginPage(page);
    // await Login.gotoLoginPage();
    await Login.enterUsername('rahulshettyacademy');
    await Login.enterPassword('learning');
    await Login.pickRoleAsAdmin();
    await Login.clickOnsubmit();
    await page.waitForTimeout(5000); 
    await expect(Login.home_text).not.toBeAttached();
  });

})
