import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { WhishlistPage } from "../pages/whishlistPage";
import { HomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";

test.describe("login suite", () => {

  let loginpage: loginPage;
  let whishlistpage: WhishlistPage;
  let homePage: HomePage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {

    loginpage = new loginPage(page);
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    await page.goto('/login');
  });

  test('@regression  login add to wishlist "jelwery"', async () => {

    await loginpage.fillForm(
      "mahmoud@test.com",
      "Test@1234"
    );

    await  expect(homePage.jewelry).toBeVisible();
    await homePage.jewelry.click();
    await productsPage.funProducts(71)

  });
  test(" verify wishlist is empty ", async ({ page }) => {
    await homePage.funWishlist()
    await expect(homePage.wishlist).toHaveText(/Wishlist\s*\(\d+\)/);


    await expect(page.locator('.wishlist-content'))
        .toHaveText('The wishlist is empty!');
    
  });
});