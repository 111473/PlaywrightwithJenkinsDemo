import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DPlaywright%2Bby%2Btesters%2Btalk%26sca_esv%3D7b0f43a5d44a29e0%26source%3Dhp%26ei%3DKpQTaNT7J7uKvr0P0PbGsQ8%26iflsig%3DACkRmUkAAAAAaBOiOq_uwAjzMteqF2PhzDT4p7SqifSk%26ved%3D0ahUKEwjUuN_8y4KNAxU7ha8BHVC7MfYQ4dUDCB8%26uact%3D5%26oq%3DPlaywright%2Bby%2Btesters%2Btalk%26gs_lp%3DEgdnd3Mtd2l6IhpQbGF5d3JpZ2h0IGJ5IHRlc3RlcnMgdGFsa0i7gQFQ2RhY4nNwAXgAkAEAmAGZAaABrQ6qAQQyNS4xuAEDyAEA-AEBmAIToALiCagCCsICChAuGAMY6gIYjwHCAgoQABgDGOoCGI8BwgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGNEDGMcBwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICCxAuGIAEGNEDGMcBwgINEAAYgAQYsQMYRhj5AcICBRAuGIAEwgIGEAAYFhgewgIIEAAYFhgKGB7CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEwgIFEAAY7wXCAggQABiiBBiJBZgDA_EFNORpwlstVbqSBwIxOaAH83WyBwIxOLgH3wk%26sclient%3Dgws-wiz%26sei%3DP5QTaKfPJ5CYseMPn6OyUQ&q=EgSInnliGL-ozsAGIjBp_PIjIkSH09UPLNwLE-bccmUT-nLTaeEa_l9NJNZOgHP-EJPBVIWWH_NEDJLdIxoyAnJSWgFD');
  await page.locator('iframe[name="a-g31512z9kr2t"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-g31512z9kr2t"]').contentFrame().getByText('Select all images with').click();
  await page.locator('iframe[name="c-g31512z9kr2t"]').contentFrame().locator('td:nth-child(2)').first().click();
  await page.locator('iframe[name="c-g31512z9kr2t"]').contentFrame().locator('.rc-imageselect-tile').first().click();
  await page.locator('iframe[name="c-g31512z9kr2t"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-g31512z9kr2t"]').contentFrame().locator('.rc-imageselect-tile').first().click();
  await page.locator('iframe[name="c-g31512z9kr2t"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('#slim_appbar').click();
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
  await page.getByText('Accessibility LinksSkip to').press('ArrowDown');
});