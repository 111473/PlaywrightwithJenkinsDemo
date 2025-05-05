import { test, expect} from "@playwright/test";
import testData from '../../test-data/qa/testdata.json';

type TestData = {
    "TestDataSet1": {
        "Skill1": string,
        "Skill2": string,
        "Skill3": string,
        "Skill4": string,
        "Skill5": string,
        "Skill6": string,
        "Skill7": string
    },
    "TestDataSet2": {
        "Skill1": string,
        "Skill2": string,
        "Skill3": string,
        "Skill4": string,
        "Skill5": string,
        "Skill6": string,
        "Skill7": string
    }
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {

    const skill = typedTestData[dataSetName as keyof TestData];
        
    test(`Data0 Driven Testing Using JSON file in Playwright ${skill.Skill1}`, async ({ page }) => {
        await page.goto(`${process.env.GOOGLE_url}`);       
        await page.getByLabel('Search', {exact: true}).fill(skill.Skill1);
        await page.getByLabel('Search', {exact: true}).press('Enter');
    })
}


