import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';


let registerPage: RegisterPage;

test.describe('@regression Register feature tests', () => {

  test.beforeEach(async ({ page }) => {

    registerPage = new RegisterPage(page);
    page.goto('/login')
  });

  test('Register user successfully', async ({ page }) => {

    
    await expect(registerPage.registerButton).toBeVisible();
    await registerPage.clickRegister()

    await registerPage.registerUser(
    'Mahmoud',
      'Ali',
      'mahmoud@test.com',
      'Test@1234',
      'male'    );


      await expect(registerPage.firstName).toHaveValue("Mahmoud")
      await expect(registerPage.lastName).toHaveValue("Ali")
      await expect(registerPage.email).toHaveValue("mahmoud@test.com")
      await expect(registerPage.password).toHaveValue("Test@1234")
      await expect(registerPage.confirmPassword).toHaveValue("Test@1234")

      await expect(registerPage.registerButton).toBeVisible();
      await registerPage.clickRegister()
  });

  

});