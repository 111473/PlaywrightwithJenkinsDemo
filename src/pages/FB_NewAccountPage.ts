import { Page, Locator } from '@playwright/test';

export class FB_NewAccountPage{
    readonly page: Page;

    public constructor(page: Page) {
        this.page = page;

        //Elements
    }

    public async clickOnSignUp(firstName: string, lastName: string){
        await this.page.getByLabel('First name', {exact: true}).click();
        await this.page.getByLabel('First name', {exact: true}).clear();
        await this.page.getByLabel('First name', {exact: true}).fill(firstName);

        await this.page.getByLabel('Last name', {exact: true}).click();
        await this.page.getByLabel('Last name', {exact: true}).clear();
        await this.page.getByLabel('Last name', {exact: true}).fill(lastName);

        
    }
}