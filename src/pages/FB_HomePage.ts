import { Page, Locator } from "@playwright/test";

export class FB_HomePage {
    readonly page: Page;

    public constructor(page:Page){
        this.page = page;
    }

    public async verifyUserAccount(account: string){
        const acnt = this.page.getByText(account)
       
        if( acnt.isVisible)
            console.log("acnt >>>> : ", acnt.isVisible);
    }

}