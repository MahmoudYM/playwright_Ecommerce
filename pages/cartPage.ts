import { Locator, Page } from "@playwright/test";

export class CartPage {

  page: Page;
  readonly books: Locator;
  readonly shopingCart:Locator;
  readonly countryDropdown:Locator;
  readonly postal:Locator;
  readonly estimateButton:Locator;
  readonly checkoutButton:Locator;
  readonly aggreeTerms:Locator;

  constructor(page: Page) {
    this.page = page;
  
    this.shopingCart= page.locator('.header-links').getByRole('link', { name: /Shopping cart/ })
    this.countryDropdown =  page.getByLabel('Country:')
    this.postal= page.getByLabel( 'Zip / postal code:')
    this.estimateButton=page.getByRole('button', { name: 'Estimate shipping' })
    this.checkoutButton=page.getByRole('button', { name: 'Checkout' })
    this.aggreeTerms=page.locator('#termsofservice')
  }

  async cartpageUrl ()
  {
    await this.page.goto("https://demowebshop.tricentis.com/cart");
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
  async funCheckoutbutton() {
    await this.checkoutButton.click()
  }

  async funAggreterms()
  {
    await this.aggreeTerms.check()

  }
} //End of first class

  export class CheckoutPage {

      readonly page: Page;

      readonly selectAdress:Locator;
    
      readonly firstName: Locator;
      readonly lastName: Locator;
      readonly email: Locator;
      readonly company: Locator;
    
      readonly country: Locator;
      readonly province: Locator;
      readonly city: Locator;
      readonly address: Locator;
      readonly addressTwo: Locator;
      readonly postalCode: Locator;
      readonly phoneNumber: Locator;
      readonly faxNumber: Locator;
    
      readonly estimateButton: Locator;
      readonly checkoutButton: Locator;
      readonly agreeTerms: Locator;
  
      readonly pickUpInStore: Locator;

      readonly cashOnDelivery: Locator;
      readonly checkMoneyOrder: Locator;
      readonly creditCard: Locator;
      readonly purchaseOrder: Locator;

      readonly paymentInfo: Locator;
      readonly continueButton: Locator;
      readonly backButton: Locator;

      constructor(page: Page) {
        this.page = page;
        
        this.selectAdress= page.getByLabel('Select a billing address ')
        this.firstName =   page.getByLabel('First name:');
        this.lastName =    page.getByLabel('Last name:');
        this.email =       page.getByLabel('Email:');
        this.company =     page.getByLabel('Company:');
    
        this.country = page.getByLabel('Country:');
        this.province = page.getByLabel('State / province:');
        this.city = page.getByLabel('City:');
        this.address = page.getByLabel('Address 1:');
        this.addressTwo = page.getByLabel('Address 2:');
        this.postalCode = page.getByLabel('Zip / postal code:');
        this.phoneNumber = page.getByLabel('Phone number:');
        this.faxNumber = page.getByLabel('Fax number:');
    
        // Replace these with the actual accessible names from your HTML
        this.estimateButton = page.getByRole('button', { name: 'Estimate' });
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.agreeTerms = page.getByRole('checkbox', { name: /agree/i });
        
        // Pick Up In Store
       this.pickUpInStore = page.getByLabel('Pick Up In Store');

      // Payment Methods
    this.cashOnDelivery = page.getByLabel('Cash On Delivery (COD) (7.00)');
    this.checkMoneyOrder = page.getByLabel('Check / Money Order (5.00)');
    this.creditCard = page.getByLabel('Credit Card');
    this.purchaseOrder = page.getByLabel('Purchase Order');

  // Payment Info
  this.paymentInfo = page.getByText('You will pay by COD');
  this.continueButton = page.getByRole('button', { name: 'Continue' });
  this.backButton = page.getByRole('link', { name: 'Back' });
    }
    async funselectAdress (address:string)
    {
      await this.selectAdress.selectOption({ label:  address });
    }

    async fillBillingAddress(
      firstName: string,
      lastName: string,
      email: string,
      company: string,
      country: string,
      province: string,
      city: string,
      address: string,
      addressTwo: string,
      postalCode: string,
      phoneNumber: string,
      faxNumber: string
    ) {
      await this.firstName.fill(firstName);
      await this.lastName.fill(lastName);
      await this.email.fill(email);
      await this.company.fill(company);
    
      await this.country.selectOption({ label: country });
      await this.province.selectOption({ label: province });
    
      await this.city.fill(city);
      await this.address.fill(address);
      await this.addressTwo.fill(addressTwo);
      await this.postalCode.fill(postalCode); 
      await this.phoneNumber.fill(phoneNumber);
      await this.faxNumber.fill(faxNumber);
    }
   }




