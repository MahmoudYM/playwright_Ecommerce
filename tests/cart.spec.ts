import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/cartPage";
import billingData from '../data/cartPage.json';
test.describe("WOrk fLow", () => {

  let loginpage: loginPage;
  let homepage: HomePage;
  let cartpage: CartPage;
  let checkoupage:CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginpage = new loginPage(page);
    homepage = new HomePage(page);
    cartpage = new CartPage(page);
    checkoupage=new CheckoutPage(page)
    await page.goto("/login");

    await loginpage.fillForm(
      "mahmoud@test.com",
      "Test@1234"
    );

    await loginpage.clickButton()
  }); 

  
  test("@regression verify cart page is displayed product", async ({ page }) => {
      

    await homepage.funBooks();
    await expect(page).toHaveURL(/books/);

    await homepage.funAddToCart("Computing and Internet");
    await homepage.funCartpage();

    await cartpage.countryDropdown.click();
    await cartpage.funEstimateshipping("Egypt");
    await cartpage.funEstmaitbutton();

    await cartpage.funAggreterms();
    await expect(page.locator("#termsofservice")).toBeChecked();

    await cartpage.funCheckoutbutton();
  });

  test("@regression verify cart page I can fill address after added prductes", async ({ page }) => 
    {
      await cartpage.cartpageUrl()

      await cartpage.countryDropdown.click();
      await cartpage.funEstimateshipping("Egypt");
      await cartpage.funEstmaitbutton();
      await cartpage.funAggreterms();
      await expect(page.locator("#termsofservice")).toBeChecked();

      await cartpage.funCheckoutbutton()

      await checkoupage.funselectAdress("New Address")

      await checkoupage.fillBillingAddress(
        billingData.billingAddress.firstName,
        billingData.billingAddress.lastName,
        billingData.billingAddress.email,
        billingData.billingAddress.company,
        billingData.billingAddress.country,
        billingData.billingAddress.province,
        billingData.billingAddress.city,
        billingData.billingAddress.address,
        billingData.billingAddress.addressTwo,
        billingData.billingAddress.postalCode,
        billingData.billingAddress.phoneNumber,
        billingData.billingAddress.faxNumber
      );

      await page
  .locator('#billing-buttons-container')
  .getByRole('button', { name: 'Continue' })
  .click();

    })


});