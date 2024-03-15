import {test, expect} from "../fixtures/my-fixture"


test('Vaild Login Test', async ({ page, loginPage }) => {
    
    await loginPage.enterEmail('abby.jessica55+15@gmail.com');
    await loginPage.enterPass('!2345678');
    await loginPage.clickSubmit();
    console.log(`The user has successfully logged in the ADA app`);
    await page.waitForTimeout(5000);
  });


 // video tutorial : https://youtu.be/FLA2gM8y-bE?list=PLrdJJVHfLoxWpAE-mNjh9_CuPCtpv2SD4 