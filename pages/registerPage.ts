import { Locator, Page } from "@playwright/test";

export class RegisterPage {
  page: Page;

  readonly genderMale: Locator;
  readonly genderFemale: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Gender (example radio buttons)
    //this.genderMale = page.getByRole('radio', { name: 'Male' });
    //this.genderFemale = page.getByRole('radio', { name: 'Female' });

    this.genderMale = page.locator('#gender-male');
    this.genderFemale = page.locator('#gender-female');

    // Inputs
    this.firstName = page.getByLabel("First name");
    this.lastName = page.getByLabel("Last name");
    this.email = page.getByLabel("Email");
    this.password = page.locator("input[name='Password']");
    this.confirmPassword = page.locator("input[name='ConfirmPassword']");

    // Button (from your HTML example)
    this.registerButton = page.locator("input[value='Register']");
  }

  async fillPersonalInfo(first: string, last: string, email: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.email.fill(email);
  }

  async fillPassword(password: string) {
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
  }

  async selectGender(gender: "male" | "female") {
    if (gender === "male") {
      await this.genderMale.check();
    } else {
      await this.genderFemale.check();
    }
  }

  async clickRegister() {
    await this.registerButton.click();
  }

  async registerUser(first: string, last: string, email: string, password: string, gender: "male" | "female") {
    await this.selectGender(gender);
    await this.fillPersonalInfo(first, last, email);
    await this.fillPassword(password);
    await this.clickRegister();
  }
}