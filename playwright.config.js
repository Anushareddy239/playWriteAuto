// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  headless:true,
  /* Maximum time one test can run for. */
  timeout: 30 * 10000,
  expect: {
    timeout: 10000
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    //browserName: 'webkit'//inbilt with playwrite
    browserName:'chromium',
    headless:false
  },
};

module.exports = config;
