import { test } from '../../src/fixture/TestFixture'
import { Google_HomePage } from '../../src/pages/Google_HomePage';
import { Google_ResultPage } from '../../src/pages/Google_ResultPage';
import { FB_LoginPage } from '../../src/pages/FB_LoginPage';
import { FB_HomePage } from '../../src/pages/FB_HomePage';
import { FB_NewAccountPage } from '../../src/pages/FB_NewAccountPage';


test('Google Page Object Model Test in Playwright :', async ({ page }) => {
    const homePage = new Google_HomePage(page);
    const resultPage = new Google_ResultPage(page);

    await homePage.goToURL();
    await homePage.searchByKeyword(`${process.env.SEARCH_KEYWORD}`);

    // await resultPage.clickOnPlaylistLink(`${process.env.SEARCH_KEYWORD}`);
    
})

test('Facebook Login Page with Playwright', async ({ page }) => {
    const loginPage = new FB_LoginPage(page);
    
    await loginPage.goToURL();
    await loginPage.login('09174221490', 'F1R3F0x@7314');  
})

test('Facebook Home Page with Playwright', async ({ page }) => {
    const loginPage = new FB_LoginPage(page);
    const homePage = new FB_HomePage(page);

    await loginPage.goToURL();
    await loginPage.login('09174221490', 'F1R3F0x@7314');

    await homePage.verifyUserAccount('Neil Herbert Agtuca'); 
})

test('Facebook New Account Page with Playwright', async ({ page }) => {
    const loginPage = new FB_LoginPage(page);
    const newAccountPage = new FB_NewAccountPage(page);

    await loginPage.goToURL();
    await loginPage.clickOnCreateNewAccount();
    
    await newAccountPage.clickOnSignUp('Herbert', 'Cayabyab');
})





