import { Page, Locator} from "@playwright/test";

export class FB_LoginPage {
    readonly page: Page;

    public constructor(page: Page){
        this.page = page; 
    }

    public async goToURL(){
        await this.page.goto(`${process.env.FACEBOOK_URL}`);
    }

    public async login(username: string, password: string) {
        await this.page.getByPlaceholder('Email or phone number', {exact: true}).click();
        await this.page.getByPlaceholder('Email or phone number', {exact: true}).clear();
        await this.page.getByPlaceholder('Email or phone number', {exact: true}).fill(username);

        await this.page.getByPlaceholder('Password', {exact: true}).first().click();    
        await this.page.getByPlaceholder('Password', {exact: true}).first().clear();
        await this.page.getByPlaceholder('Password', {exact: true}).first().fill(password);
        await this.page.getByText('Log In', {exact: true}).first().click()
    }

    public async clickOnCreateNewAccount() {
        await this.page.getByText('Create new account').click();
    }

    public async clickOnForgotPasswrodLink() {
        await this.page.getByText('Forgot password?', {exact: true});
    }

    public async clickOnLogout(){
        await this.page
    }
}