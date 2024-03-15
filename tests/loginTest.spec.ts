//import  LoginPage  from 'E:/Autimation_testing/Playwright/Practice01/pages/loginPage';
import {test, expect} from "E:/Autimation_testing/Playwright/Practice01/fixtures/my-fixture"


test('Vaild Login Test', async ({ page, loginPage }) => {
    
    await loginPage.enterEmail('abby.jessica55+15@gmail.com');
    await loginPage.enterPass('!2345678');
    await loginPage.clickSubmit();
    console.log(`The user has successfully logged in the ADA app`);
    await page.waitForTimeout(5000);
    page.close();
  });


 // video tutorial : https://youtu.be/FLA2gM8y-bE?list=PLrdJJVHfLoxWpAE-mNjh9_CuPCtpv2SD4 