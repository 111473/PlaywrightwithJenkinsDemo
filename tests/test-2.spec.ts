import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by Testers Talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  // await page.getByRole
  // await page.getByRole('combobox', { name: 'Search' }).fill('Playwright Testers ');
  // await page.getByRole('combobox', { name: 'Search' }).press('ArrowLeft');
  // await page.goto('https://www.google.com/search?q=Playwright+by+Testers+Talk+&sca_esv=072bf505c6b5844f&source=hp&ei=OY0TaMLNKInf2roP-eyr0Qk&iflsig=ACkRmUkAAAAAaBObSQxdrFwWzMZakWU2UpO7xzflrnju&ved=0ahUKEwiCzrStxYKNAxWJr1YBHXn2KpoQ4dUDCB8&uact=5&oq=Playwright+by+Testers+Talk+&gs_lp=Egdnd3Mtd2l6IhtQbGF5d3JpZ2h0IGJ5IFRlc3RlcnMgVGFsayBIh4cCUABY7_wBcAN4AJABAJgBxAGgAacUqgEEMjMuNrgBA8gBAPgBAZgCE6AClg3CAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAg4QABiABBixAxiDARiKBcICBRAAGIAEwgILEC4YgAQY0QMYxwHCAg0QABiABBixAxhGGPkBwgIGEAAYFhgewgIIEAAYFhgKGB7CAggQABiABBiiBMICBxAAGIAEGA2YAwCSBwQxNS40oAfnd7IHBDE0LjS4B5UN&sclient=gws-wiz&sei=X40TaP6PKt3G4-EPs9i6mAc');
  // await page.getByRole('link', { name: 'Playwright Tutorial Full Course 2024 | Playwright Testing ... YouTube Testers' }).click({
  //   button: 'right'
  // });

  await page.getByRole('link', { name: 'Playwright Tutorial Full Course 2024 | Playwright Testing ... YouTube Testers' }).click();
});