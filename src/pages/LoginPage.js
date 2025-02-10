exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.getByRole("textbox", { name: "Username:" });
    this.password_textbox = page.getByRole("textbox", { name: "Password:" });
    this.adminRole_checkbox = page.locator("(//span[@class='checkmark'])[1]");
    this.userRole_checkbox = page.locator("(//span[@class='checkmark'])[2]");
    this.occupationASTeacher = page.getByRole("combobox");
    this.agree_button = page.getByRole("checkbox", {
      name: "I Agree to the terms and",
    });
    this.submit_button = page.getByRole("button", { name: "Sign In" });
    this.alert_box = page.getByRole("button", { name: "Okay" });
    this.home_text = page.getByRole("link", { name: "ProtoCommerce Home" });
    this.errorMessageWhenCredentialsIncorrect = page.getByText(
      "Incorrect username/password."
    );
    this.errorMessageWhenCredentialsEmpty = page.getByText(
      "Empty username/password."
    );
  }

  //Action methods
  async gotoLoginPage() {
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  }

  async enterUsername(username) {
    await this.username_textbox.fill(username);
  }

  async enterPassword(password) {
    await this.password_textbox.fill(password);
  }

  async pickRoleAsUser() {
    await this.userRole_checkbox.click();
  }

  async pickRoleAsAdmin() {
    await this.adminRole_checkbox.click();
  }

  async pickOccupationASTeacher() {
    await this.occupationASTeacher.selectOption("teacher").click();
  }

  async selectAgreeButton() {
    await this.agree_button.click();
  }

  async clickOnsubmit() {
    await this.submit_button.click();
  }

  async acceptUserAlert() {
    await this.alert_box.click();
  }

};
