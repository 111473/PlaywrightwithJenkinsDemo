import { Page, Locator } from '@playwright/test';

export class Google_ResultPage {
    readonly page: Page;
   


    constructor(page: Page) {
        this.page = page;

        //Elements
        
    }

    async clickOnPlaylistLink(keyword: string) {       
        
        // await this.page.getByRole('link', { name: `${process.env.SEARCH_KEYWORD}` }).click();
        await this.page.getByRole('link', { name: `Playwright Tutorial Full Course 2024 | Playwright Testing ... YouTube Testers` }).click()
    }

}