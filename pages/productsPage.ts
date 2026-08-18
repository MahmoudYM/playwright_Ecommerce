import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    page: Page;
    productId: Locator;

    constructor(page: Page) {

        this.page = page;
        this.productId = page.locator('.product-grid .item-box').first();
    }

    async funProducts(productId: number) {        
        await this.productId.locator(`[data-productid="${productId}"]`)
        .click();

    }
}