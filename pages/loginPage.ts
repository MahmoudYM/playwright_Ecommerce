import { Locator, Page } from "@playwright/test";

export class loginPage {

  page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.emailInput =
      page.getByLabel('Email');

    this.passwordInput =
      page.getByLabel('Password');

    this.loginButton =
      page.getByRole('button', { name: 'Log in' });
  }

  async funEmail(email: string) {

    await this.emailInput.fill(email);
  }

  async funPassword(password: string) {

    await this.passwordInput.fill(password);
  }

  async fillForm(email: string, password: string) {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);
  }

  async clickButton() {

    await this.loginButton.click();
  }
}