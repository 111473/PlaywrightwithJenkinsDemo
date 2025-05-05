import { describe } from 'node:test';
import { test } from '../../src/fixture/TestFixture';


describe('Smoke Test Run', () => {
    test(' Test1 Google Page Object Model Test in Playwright :', async ({ google_HomePage, google_ResultPage, google_PlaylistPage }) => {
        await google_HomePage.goToURL();
        
    })
})

describe('Regression Test Run', () => {
    test('Test2 Facebook Login Page with Playwright', async ({ fb_LoginPage }) => {       
        await fb_LoginPage.goToURL();
    })
    
    test('Test3 Facebook Home Page with Playwright', async ({ fb_LoginPage, fb_HomePage }) => {
        await fb_LoginPage.goToURL();
    })
    
    test('Test3 Facebook New Account Page with Playwright', async ({ fb_LoginPage, fb_newAccountPage }) => {
        await fb_LoginPage.goToURL();
    })
})







