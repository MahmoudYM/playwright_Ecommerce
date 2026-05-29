import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";

test.describe("login suite", () => {

  let loginpage: loginPage;

  test.beforeEach(async ({ page }) => {

    loginpage = new loginPage(page);

    await page.goto('/login');
  });

  test('@regression only login', async () => {

    await loginpage.fillForm(
      "mahmoud@test.com",
      "Test@1234"
    );

    await expect(loginpage.emailInput)
      .toHaveValue("mahmoud@test.com");

    await expect(loginpage.passwordInput)
      .toHaveValue("Test@1234");

    await loginpage.clickButton();

  });

});