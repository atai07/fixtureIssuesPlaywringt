import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig( {
  testMatch: ["*spec.ts"],
  //testIgnore:'testFileName.spec.ts',   //ignore the test file

  /* Maximum time one test can run for. */
  timeout: 5 * 60 * 1000, //this is five minutes
 
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    baseURL: `https://staging-association.memberlounge.app/`, 
    //baseURL: `https://pans-staging.memberlounge.app/login?next=/`, 
    
 
    viewport: null,
    headless: false,   //Browser will show.
    //browserName: "chromium", // IT WIL DEFULT THE CHROME BROWSER
    actionTimeout: 20000,
    ignoreHTTPSErrors: true,
    //firefoxUserPrefs: 'true',
            

    launchOptions: {
      slowMo: 400,
      //args: ["--start-maximized"]
      args: ["--start-fullscreen"]
    }
  
  },



  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], 
  //      viewport:{width: 1532, height:864}
           }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
     {
       name: 'Mobile Safari',
       use: { ...devices["iPhone 14 Pro"] },
     },

     {
      name: 'iPhone',
      use: { ...devices[`iPhone 12 Pro`] },
     },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  // Folder for test artifacts such as screenshots, video, traces, etc.
  outputDir: `test-results/`,

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  }
);
