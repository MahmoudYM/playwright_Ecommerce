import { Locator, Page } from "@playwright/test";

export class HomePage {

  page: Page;
  // Containers
  readonly topMenu: Locator;
  readonly listbox: Locator;

    // Top nav menu — top-level links
    readonly navBooks: Locator;
    readonly navComputers: Locator;
    readonly navElectronics: Locator;
    readonly navApparelShoes: Locator;
    readonly navDigitalDownloads: Locator;
    readonly navJewelry: Locator;
    readonly navGiftCards: Locator;

   // Sidebar listbox links
    readonly books: Locator;
    readonly computers: Locator;
    readonly electronics: Locator;
    readonly apparelShoes: Locator;
    readonly digitalDownloads: Locator;
    readonly jewelry: Locator;
    readonly giftCards: Locator;

  // Other page elements
  readonly addToCart: Locator;
  readonly shoppingCart: Locator;
  readonly logOut: Locator;
  readonly register: Locator;
  readonly countryDropdown: Locator;
  readonly wishlist: Locator;
  
  constructor(page: Page) {
  // Containers — single source of truth
  this.topMenu = page.locator('ul.top-menu');
  this.listbox = page.locator('div.listbox ul.list');

   // Top nav — top-level links, scoped from topMenu
   this.navBooks = this.topMenu.getByRole('link', { name: 'Books' });
   this.navComputers = this.topMenu.getByRole('link', { name: 'Computers' });
   this.navElectronics = this.topMenu.getByRole('link', { name: 'Electronics' });
   this.navApparelShoes = this.topMenu.getByRole('link', { name: 'Apparel & Shoes' });
   this.navDigitalDownloads = this.topMenu.getByRole('link', { name: 'Digital downloads' });
   this.navJewelry = this.topMenu.getByRole('link', { name: 'Jewelry' });
   this.navGiftCards = this.topMenu.getByRole('link', { name: 'Gift Cards' });


    // Sidebar listbox links, scoped from listbox
    this.books = this.listbox.getByRole('link', { name: 'Books' });
    this.computers = this.listbox.getByRole('link', { name: 'Computers' });
    this.electronics = this.listbox.getByRole('link', { name: 'Electronics' });
    this.apparelShoes = this.listbox.getByRole('link', { name: 'Apparel & Shoes' });
    this.digitalDownloads = this.listbox.getByRole('link', { name: 'Digital downloads' });
    this.jewelry = this.listbox.getByRole('link', { name: 'Jewelry' });
    this.giftCards = this.listbox.getByRole('link', { name: 'Gift Cards' });

    
    this.addToCart=page.locator(".product-item");
    this.shoppingCart= page.locator('.header-links').getByRole('link', { name: /Shopping cart/ })
    this.logOut= page.locator('.header-links').getByRole('link', { name: /Log out/ })
    this.register= page.locator('.header-links').getByRole('link', { name: /Register/ })
    this.wishlist=page.locator('.header-links').getByRole('link', { name: /Wishlist/ })
    this.countryDropdown = page.locator('#CountryId');
  }

  async funBooks() {
    await this.navBooks.click();
  }

  async funcComputers(){
    await this.navComputers.click();
  }

  
  async funElectronics(){
    await this.navElectronics.click()
  }

  async funLogOut ()
  {
    await this.logOut.click()
  }

  async funWishlist ()
  {
    await this
          .wishlist
             .click()
  }

  async funAddToCart(productButton:string) {
    await this.addToCart
  .filter({ hasText: productButton})
  .locator("input[value='Add to cart']")
  .click();
}


async funCartpage ()
{
  await this.shoppingCart
  .click()
}

}