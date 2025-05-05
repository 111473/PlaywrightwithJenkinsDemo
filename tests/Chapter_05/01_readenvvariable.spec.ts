import { test } from "@playwright/test";

test('Capture screenshots in playwright', async ({ page }) => {
    // Go to URL
    await page.goto(`${process.env.GOOGLE_URL}`);

})