import { test,expect } from "@playwright/test";
import { loginPage} from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";

let loginpage: loginPage;
let homePage: HomePage;
let cartPage: CartPage;

test.describe(" E-commerce Flow", () => {

  test.beforeEach(async ({ page }) => {

    loginpage = new loginPage(page);
    homePage = new HomePage(page);
    cartPage=new CartPage(page)

    // 1. open login page
    await page.goto("/login");
    await page.waitForLoadState("domcontentloaded");

    // // 2. login
     await loginpage.fillForm("mahmoud@test.com", "Test@1234");
     await loginpage.clickButton()
  });

  test(" Add book to cart then logout ", async ({ page }) => {

    await homePage.funBooks();
    await expect(page).toHaveURL(/books/);
    await homePage.funAddToCart("Computing and Internet" )
    await homePage.funCartpage()
    await homePage.funLogOut()
    await expect(homePage.register).toHaveText("Register")
  });

  
  test(" Add book to cart then procicing to payment ", async ({ page }) => {

    await homePage.funBooks();
    await expect(page).toHaveURL(/books/);
    await homePage.funAddToCart("Computing and Internet" )
    await homePage.funCartpage()
    await cartPage.countryDropdown.click()
    await cartPage.funEstimateshipping("Egypt")
    await cartPage.funEstmaitbutton();

  });

   test(" click on wishe list ", async ({ page }) => {

    await expect(homePage.wishlist).toHaveText(/Wishlist\s*\(\d+\)/);
    await homePage.funWishlist()

  });


});
