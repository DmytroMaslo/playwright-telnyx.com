// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: true,
      baseURL: 'https://telnyx.com',
      viewport: { width: 1280, height: 720 },
      channel: 'chromium',
      ignoreHTTPSErrors: true,
      video: 'on-first-retry',
      
    },
    reporter: [["list"],["allure-playwright"],]
  
  };
  
  module.exports = config;