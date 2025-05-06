import { test as base } from '@playwright/test';
import { Google_HomePage } from '../../src/pages/Google_HomePage';
import { Google_ResultPage } from '../../src/pages/Google_ResultPage';
import { Google_PlaylistPage } from '../../src/pages/Google_PlaylistPage';
import { FB_LoginPage } from '../../src/pages/FB_LoginPage';
import { FB_NewAccountPage } from '../../src/pages/FB_NewAccountPage';
import { FB_HomePage } from '../../src/pages/FB_HomePage';

export const test =  base.extend<{
    saveLogs: void;
    google_HomePage: Google_HomePage;
    google_ResultPage: Google_ResultPage;
    google_PlaylistPage: Google_PlaylistPage;
    fb_LoginPage: FB_LoginPage;
    fb_HomePage: FB_HomePage;
    fb_newAccountPage: FB_NewAccountPage;
}>({
    saveLogs: [async ({}, use) =>{
        console.log('Global before is running');

        await use();

        console.log('Global aftereach is running');
    },
    ({auto: true})],
    google_HomePage: async ({page}, use) => {
        const google_HomePage = new Google_HomePage(page); 
        await use(google_HomePage);
    },
    google_ResultPage: async ({page}, use) => {
        const google_ResultPage = new Google_ResultPage(page);
        await use(google_ResultPage);
    },
    google_PlaylistPage: async ({page}, use) => {
        const google_PlaylistPage = new Google_PlaylistPage(page);
        await use(google_PlaylistPage);
    },
    fb_LoginPage: async ({page}, use) => {
        const fb_LoginPage = new FB_LoginPage(page);
        await use(fb_LoginPage);
    },
    fb_HomePage: async ({page}, use) => {
        const fb_HomePage = new FB_HomePage(page);
        await use(fb_HomePage);
    },
    fb_newAccountPage: async ({page}, use) => {
        const fb_newAccountPage = new FB_NewAccountPage(page);
        await use(fb_newAccountPage);
    }
})
