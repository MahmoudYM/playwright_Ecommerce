import { Locator, Page } from "@playwright/test";

export class HomePage {

  page: Page;
  readonly books: Locator;
  readonly addToCart: Locator;
  readonly shopingCart:Locator;
  readonly logOut:Locator; 
  readonly register:Locator;
  readonly countryDropdown:Locator;

  constructor(page: Page) {
    this.page = page;
   
    this.books = page.locator("ul.list a[href='/books']");
    this.addToCart=page.locator(".product-item");
    this.shopingCart= page.locator('.header-links').getByRole('link', { name: /Shopping cart/ })
    this.logOut= page.locator('.header-links').getByRole('link', { name: /Log out/ })
    this.register= page.locator('.header-links').getByRole('link', { name: /Register/ })
    this.countryDropdown = page.locator('#CountryId');
  }

  async funBooks() {
    await this.books.click();
  }

  async funLogOut ()
  {
    await this.logOut.click()
  }

  async funAddToCart(productButton:string) {
    await this.addToCart
  .filter({ hasText: productButton})
  .locator("input[value='Add to cart']")
  .click();
}



async funCartpage ()
{
  await this.shopingCart
  .click()
}

}