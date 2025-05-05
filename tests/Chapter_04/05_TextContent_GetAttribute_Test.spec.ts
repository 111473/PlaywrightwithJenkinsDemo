// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Get Text & Get attribute value in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://github.com/BakkappaN');

    
    //Get Element by textContext()
    const elem1 =  await page.locator('[itemprop="name"]').textContent()
    console.log('Eleme >>>', elem1?.trim());
    expect(elem1?.trim()).toBe('Testers Talk');

    
    // Get element innerText()
    const name = await page.locator('[itemprop="name"]').innerText();
    const finalName = name?.trim();
    console.log(`Name is : ${finalName}`);
    expect(finalName).toBe('Testers Talk');

    // Get attribute value
    // const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    // console.log(`Attribute value is : ${attributeValue}`);
});