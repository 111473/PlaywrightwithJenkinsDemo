import { Locator, Page } from "@playwright/test";

export class Google_HomePage {
    readonly page: Page;
    readonly searchTextbox: Locator;

    constructor(page: Page) {
        this.page = page;

        //Elements
        this.searchTextbox = page.locator('#APjFqb');
    }

    async goToURL(){
        await this.page.goto(`${process.env.GOOGLE_URL}`)
    }

    async searchByKeyword(keyword: string) {
        await this.searchTextbox.click();
        await this.searchTextbox.fill(keyword);
        await this.searchTextbox.press('Enter');
    }
}