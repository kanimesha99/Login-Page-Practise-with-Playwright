// // baseClass.js
// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage"; // Assuming you have a LoginPage class

// export class BaseClass {
//     constructor(page) {
//         this.page = page;
//         this.Login = new LoginPage(page);
//     }

//     async beforeEach() {
//         await this.Login.gotoLoginPage();
//     }

//     async afterEach() {
//         await this.page.close();
//     }
// }