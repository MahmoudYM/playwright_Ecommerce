import { Locator, Page } from "@playwright/test";

export class CartPage {

  page: Page;
  readonly books: Locator;
  readonly shopingCart:Locator;
  readonly countryDropdown:Locator;
  readonly postal:Locator;
  readonly estimateButton:Locator;

  constructor(page: Page) {
    this.page = page;
  
    this.shopingCart= page.locator('.header-links').getByRole('link', { name: /Shopping cart/ })
    this.countryDropdown =  page.getByLabel('Country:')
    this.postal= page.getByLabel( 'Zip / postal code:')
    this.estimateButton=page.getByRole('button', { name: 'Estimate shipping' })
  }

  async funEstimateshipping(Country:string) {
    await this.countryDropdown.selectOption({
        label: Country
    });
    await this.postal.fill("1245")
  }

  async funEstmaitbutton() {
    await this.estimateButton.click()
  }





}