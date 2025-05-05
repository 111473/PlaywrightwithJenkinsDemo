import { describe } from 'node:test';
import { test } from '../../src/fixture/TestFixture';


test('Google Page Object Model Test in Playwright :', async ({ google_HomePage, google_ResultPage, google_PlaylistPage }) => {
    
    await google_HomePage.goToURL();
    await google_HomePage.searchByKeyword(`${process.env.SEARCH_KEYWORD}`);

    // await resultPage.clickOnPlaylistLink(`${process.env.SEARCH_KEYWORD}`);
    
})

test('Facebook Login Page with Playwright', async ({ fb_LoginPage }) => {       
    await fb_LoginPage.goToURL();
    await fb_LoginPage.login('09174221490', 'F1R3F0x@7314');  
})

test('Facebook Home Page with Playwright', async ({ fb_LoginPage, fb_HomePage }) => {
    await fb_LoginPage.goToURL();
    await fb_LoginPage.login('09174221490', 'F1R3F0x@7314');

    await fb_HomePage.verifyUserAccount('Neil Herbert Agtuca'); 
})

test('Facebook New Account Page with Playwright', async ({ fb_LoginPage, fb_newAccountPage }) => {
    await fb_LoginPage.goToURL();
    await fb_LoginPage.clickOnCreateNewAccount();
    
    await fb_newAccountPage.clickOnSignUp('Herbert', 'Cayabyab');
})





