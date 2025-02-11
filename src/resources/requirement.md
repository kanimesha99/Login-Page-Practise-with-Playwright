# Requirements Document

## Project Overview
This document outlines the requirements for the **Login Page Automation Testing** using Playwright with JavaScript.

## Test Scope
The scope of this test includes validating the login functionality for different user roles and input scenarios to ensure the system behaves as expected.

## Test Environment
- **Test Framework:** Playwright
- **Programming Language:** JavaScript
- **Test Runner:** Playwright Test
- **Reporting Tool:** Allure Report
- **Environment Variables:** Stored in `.env` file
- **Design Pattern:** Page Object Model (POM)

## Test Cases

### TC_001 - Successful Login as Admin
**Description:** Verify that an admin user can log in successfully.
**Steps:**
1. Navigate to the login page.
2. Enter a valid admin username.
3. Enter a valid password.
4. Select the 'Admin' role.
5. Agree to the terms.
6. Click submit.
7. Verify that the home page is displayed.

### TC_002 - Login with Incorrect Username
**Description:** Verify that login fails with an incorrect username.
**Steps:**
1. Enter an incorrect username.
2. Enter a valid password.
3. Select the 'Admin' role.
4. Agree to the terms.
5. Click submit.
6. Verify that an error message appears.

### TC_003 - Login with Empty Username
**Description:** Verify that login fails when the username field is left empty.
**Steps:**
1. Leave the username field empty.
2. Enter a valid password.
3. Select the 'Admin' role.
4. Agree to the terms.
5. Click submit.
6. Verify that an error message appears.

### TC_004 - Login with Uppercase Username
**Description:** Verify that login fails when entering the username in uppercase.
**Steps:**
1. Enter the username in uppercase.
2. Enter a valid password.
3. Select the 'Admin' role.
4. Agree to the terms.
5. Click submit.
6. Verify that an error message appears.

### TC_005 - Login with Empty Password
**Description:** Verify that login fails when the password field is left empty.
**Steps:**
1. Enter a valid username.
2. Leave the password field empty.
3. Select the 'Admin' role.
4. Agree to the terms.
5. Click submit.
6. Verify that an error message appears.

### TC_006 - Login with Incorrect Password
**Description:** Verify that login fails when entering an incorrect password.
**Steps:**
1. Enter a valid username.
2. Enter an incorrect password.
3. Select the 'Admin' role.
4. Agree to the terms.
5. Click submit.
6. Verify that an error message appears.

### TC_007 - Login with Incorrect Username and Password
**Description:** Verify that login fails when both username and password are incorrect.
**Steps:**
1. Enter an incorrect username.
2. Enter an incorrect password.
3. Select the 'Admin' role.
4. Agree to the terms.
5. Click submit.
6. Verify that an error message appears.

### TC_008 - Login with Empty Username and Password
**Description:** Verify that login fails when both username and password fields are empty.
**Steps:**
1. Leave both username and password fields empty.
2. Select the 'Admin' role.
3. Agree to the terms.
4. Click submit.
5. Verify that an error message appears.

### TC_009 - Successful Login as User
**Description:** Verify that a user can log in successfully.
**Steps:**
1. Enter a valid username.
2. Enter a valid password.
3. Select the 'User' role.
4. Accept the user alert.
5. Agree to the terms.
6. Click submit.
7. Verify that the home page is displayed.

### TC_010 - Login Without Agreeing to Terms
**Description:** Verify that login fails when the user does not agree to the terms.
**Steps:**
1. Enter a valid username.
2. Enter a valid password.
3. Select the 'Admin' role.
4. Click submit without agreeing to the terms.
5. Verify that the home page is **not** displayed.

## Assumptions
- Valid credentials are stored in an environment file (`.env`).
- Error messages are correctly displayed when invalid inputs are provided.
- Different roles (Admin/User) have different behaviors.
- Page Object Model (POM) is used for better test structure.

## Dependencies
- Node.js
- Playwright framework
- dotenv package for environment variables
- Allure Report for test reporting

## Expected Outcome
- The system correctly authenticates valid users and rejects invalid attempts with appropriate error messages.
- UI elements behave as expected during login attempts.



