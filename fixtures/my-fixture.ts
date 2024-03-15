import {test as base} from "@playwright/test"
import  LoginPage  from "../pages/loginPage";

type UIpage = {
    loginPage: LoginPage;
};

export const test = base.extend<UIpage>({
    loginPage: async ({ page }, use) => {
      // Set up the fixture.
      const loginPage = new LoginPage(page);
      await page.goto(`https://staging-association.memberlounge.app/login`);
      console.log(`Fixture is working :D`)
  
      // Use the fixture value in the test.
      await use(loginPage);
    },
  });
  export { expect } from '@playwright/test';