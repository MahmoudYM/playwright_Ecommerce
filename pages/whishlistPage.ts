import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
class WhishlistPage {
    page: Page;
    // Containers
    readonly topMenu: Locator;
    readonly listbox: Locator;
  

    constructor(page: Page) {
        this.page = page;
        this.topMenu = this.page.locator("//div[@class='header-links']");
        this.listbox = this.page.locator("//div[@class='listbox']");
    }

   

}